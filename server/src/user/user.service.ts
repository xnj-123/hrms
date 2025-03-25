import { Injectable, NotFoundException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository, Like, FindOptionsWhere } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessException } from '../common//business.exception';
import { Department } from '../department/entities/department.entity';
import { Position } from '../position/entities/position.entity';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly user: Repository<User>,@InjectRepository(Department) private readonly department: Repository<Department>
  ,@InjectRepository(Position) private readonly position: Repository<Position>) { }

  async create(createUserDto: CreateUserDto) {
    const existing = await this.user.findOne({ where: { username: createUserDto.username } });
    if (existing) throw new ConflictException('用户名已存在');

    const user = new User();
    user.username = createUserDto.username;
    user.passwordHash = createUserDto.password;
    user.realName = createUserDto.realName;
    user.phone = createUserDto.phone;
    user.email = createUserDto.email;

    if (createUserDto.positionId) {
      const position = await this.position.findOne({
        where: { id: createUserDto.positionId },
        relations: ['department'],
      });
      if (!position) throw new NotFoundException('职位不存在');
      
      if (createUserDto.departmentId && position.department.id !== createUserDto.departmentId) {
        throw new ConflictException('职位与部门不匹配');
      }
      user.positionId = position;
      user.departmentId = position.department; 
    }

    if (createUserDto.departmentId && !user.positionId) {
      const department = await this.department.findOneBy({ id: createUserDto.departmentId });
      if (!department) throw new NotFoundException('部门不存在');
      user.departmentId = department;
    }

    this.user.save(user)

    return true;
  }

  async findAll(query: { keyWord?: string, page?: number, pageSize?: number }) {
    const page = Math.max(Number(query.page) || 1, 1); 
    const pageSize = Math.min(Math.max(Number(query.pageSize) || 10, 1), 100);
    const searchKeyword = query.keyWord?.trim() || '';

    const whereConditions: any = {};
    if (searchKeyword) {
      whereConditions.username = Like(`%${searchKeyword}%`);
    }

    const queryBuilder = this.user.createQueryBuilder('user')
    .leftJoinAndSelect('user.departmentId', 'department')
    .leftJoinAndSelect('user.positionId', 'position')
    .orderBy('user.id', 'DESC')
    .skip((page - 1) * pageSize)
    .take(pageSize)
    .cache(true);
  
    // 添加查询条件
    if (Object.keys(whereConditions).length > 0) {
      queryBuilder.where(whereConditions);
    }
    
    const [rawData, total] = await Promise.all([
      queryBuilder
        .select([
          'user.id',
          'user.username',
          'user.realName',
          'user.avatar',
          'user.phone',
          'user.email',
          'user.createdAt',
          'user.updatedAt',
          'department.name AS departmentName', // 提取部门名称
          'position.name AS positionName'      // 提取职位名称
        ])
        .getRawMany(),
      this.user.count({ where: whereConditions })
    ]);
    
    const data = rawData.map(item => ({
      id: item.user_id,
      username: item.user_username,
      realName: item.user_real_name,
      avatar: item.user_avatar,
      phone: item.user_phone,
      email: item.user_email,
      createdAt: item.user_created_at,
      updatedAt: item.user_updated_at,
      departmentName: item.departmentName || null,
      positionName: item.positionName || null
    }));

    return {
      data,
      total
    }
  }

  async findOne(id: number) {
    const queryBuilder = this.user.createQueryBuilder('user')
      .leftJoin('user.departmentId', 'department')
      .leftJoin('user.positionId', 'position')
      .where('user.id = :id', { id });
  
    const rawData = await queryBuilder
      .select([
        'user.id',
        'user.username',
        'user.realName',
        'user.avatar',
        'user.phone',
        'user.email',
        'user.createdAt',
        'user.updatedAt',
        'department.name AS departmentName',
        'position.name AS positionName'
      ])
      .getRawOne();
  
    if (!rawData) {
      throw new NotFoundException('用户不存在');
    }
  
    return {
      id: rawData.user_id,
      username: rawData.user_username,
      realName: rawData.user_real_name,
      avatar: rawData.user_avatar,
      phone: rawData.user_phone,
      email: rawData.user_email,
      createdAt: rawData.user_created_at,
      updatedAt: rawData.user_updated_at,
      departmentName: rawData.departmentName || null,
      positionName: rawData.positionName || null
    };
  }

  async findUserList(keyword:string){
    
    const users = await this.user.find({
      where: {
        username: Like(`%${keyword}%`)
      }
    });
  
    return users.map(user => ({
      value: user.id,
      username: user.username,
      realName: user.realName || '未命名'
    }));

  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
    
  }

  async remove(id: number) {
    await this.user.delete(id)
    return true;
  }

  async verify(id:number) {
    const user = await this.user.findOne({
      where: { id },
      relations: ['managedDepartments']
    });

    if (!user) {
      throw new NotFoundException(`用户(ID ${id})不存在`);
    }
  
    const isDepartmentManager = user.managedDepartments?.length > 0;
    console.log("🚀 ~ UserService ~ verify ~ isDepartmentManager:", isDepartmentManager)
    if(isDepartmentManager)
      return true;
    else
      this.remove(id)
  }
}
