import { Injectable, InternalServerErrorException, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';
import { Position } from '../position/entities/position.entity';
import { User } from 'src/user/entities/user.entity';
import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
@Injectable()
export class DepartmentService {

  constructor(@InjectRepository(Department) private readonly department: Repository<Department>,@InjectRepository(User) 
  private readonly user: Repository<User>,private dataSource: DataSource) { }

  async create(createDepartmentDto: CreateDepartmentDto) {
    let chargeUser: User | null = null;
    if (createDepartmentDto.chargeId) {
      chargeUser = await this.user.findOne({ 
        where: { id: createDepartmentDto.chargeId },
      });
      if (!chargeUser) {
        throw new NotFoundException(`用户ID ${createDepartmentDto.chargeId} 不存在`);
      }
    }

    const existing = await this.department.findOne({
      where: { name: createDepartmentDto.name },
    });
    if (existing) {
      throw new ConflictException('该部门名称已存在');
    }

    const department = new Department();
    department.name = createDepartmentDto.name;
    department.dtype = createDepartmentDto.dtype;
    department.chargeId = chargeUser;

    return this.department.save(department);
  }

  async findAll(queryParam: { 
    keyWord?: string,
    dtype?: string, 
    page?: number, 
    pageSize?: number 
  }) {
    const page = Math.max(Number(queryParam.page) || 1, 1);
    const pageSize = Math.min(Math.max(Number(queryParam.pageSize) || 10, 1), 100);
    const searchKeyword = queryParam.keyWord?.trim() || '';
    const dtype = queryParam.dtype?.trim() || '';
  
    try {
      // 阶段1：分页查询部门ID
      const subQuery = this.department
        .createQueryBuilder('department')
        .select('department.id', 'id')
        .orderBy('department.name', 'ASC')
        .skip((page - 1) * pageSize)
        .take(pageSize);
  

      let hasWhere = false;
      if (searchKeyword) {
        subQuery.where('department.name LIKE :name', { 
          name: `%${searchKeyword}%` 
        });
        hasWhere = true;
      }
      if (dtype) {
        subQuery[hasWhere ? 'andWhere' : 'where']('department.dtype = :dtype', { dtype });
        hasWhere = true;
      }
  
      const departmentIds = (await subQuery.getRawMany()).map(d => d.id);
      if (departmentIds.length === 0) {
        return { data: [], total: 0 }; // 无数据时提前返回
      }
  
      const queryBuilder = this.department
        .createQueryBuilder('department')
        .leftJoinAndSelect('department.chargeId', 'charge')
        .leftJoinAndSelect('department.positions', 'positions')
        .leftJoinAndSelect('positions.users', 'users')
        .where('department.id IN (:...departmentIds)', { departmentIds })
        .orderBy('department.id', 'DESC');
  
      // 阶段3：总数查询（保持条件一致）
      const totalQuery = this.department
        .createQueryBuilder('department')
        .select('COUNT(department.id)', 'count');
  
      if (searchKeyword) {
        totalQuery.where('department.name LIKE :name', { 
          name: `%${searchKeyword}%` 
        });
      }
      if (dtype) {
        totalQuery.andWhere('department.dtype = :dtype', { dtype });
      }
  
      const [departments, totalResult] = await Promise.all([
        queryBuilder.getMany(),
        totalQuery.getRawOne()
      ]);
  
      const data = departments.map(department => ({
        id: department.id,
        name: department.name,
        dtype: department.dtype,
        createdAt: department.createdAt,
        updatedAt: department.updatedAt,
        charge: department.chargeId ? {
          id: department.chargeId.id,
          username: department.chargeId.username,
          realname: department.chargeId.realName
        } : null,
        positionCount: department.positions?.length || 0,
        positions: department.positions?.map(position => ({
          id: position.id,
          name: position.name,
          userCount: position.users?.length || 0,
          users: position.users?.map(user => ({
            id: user.id,
            username: user.username,
            realName: user.realName
          })) || []
        })) || []
      }));
  
      return {
        data,
        total: Number(totalResult?.count || 0)
      };
    } catch (error) {
      console.error(`查询失败: ${error.message}`, { 
        queryParam, 
        stack: error.stack 
      });
      throw new InternalServerErrorException('查询部门信息失败');
    }
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    const department = await this.department.findOne({ 
      where: { id },
      relations: ['chargeId'] 
    });
    if (!department) {
      throw new NotFoundException(`部门ID ${id} 不存在`);
    }
  
    let newCharge: User | null = null;
    const oldCharge = department.chargeId;
    
    if (updateDepartmentDto.chargeId) {
      newCharge = await this.user.findOne({ 
        where: { id: updateDepartmentDto.chargeId },
      });
      if (!newCharge) {
        throw new NotFoundException(`当前负责人不存在`);
      }
    }
  
    department.name = updateDepartmentDto.name as string;
    department.dtype = updateDepartmentDto.dtype as string;
    department.chargeId = newCharge || oldCharge;

    this.department.save(department);

    return true;
  }

  async remove(id: number) {
    await this.dataSource.transaction(async transactionalEntityManager => {

      const department = await transactionalEntityManager.findOne(Department, {
        where: { id },
        relations: ['positions', 'positions.users']
      });
  
      if (!department) {
        throw new NotFoundException('部门不存在');
      }
  
      const hasActiveUsers = department.positions.some(p => p.users.length > 0);
      if (hasActiveUsers) {
        throw new ConflictException('部门下存在在职员工，禁止删除');
      }

      if (department.positions?.length) {
        await transactionalEntityManager.remove(Position, department.positions);
      }
      
      await transactionalEntityManager.remove(Department, department);

    });
    
    return true;
  }
  
  async getDetail(){
    try {
      // 阶段1：分页查询部门ID
      const subQuery = this.department
        .createQueryBuilder('department')
        .select('department.id', 'id')
        .orderBy('department.name', 'ASC')
  
      const departmentIds = (await subQuery.getRawMany()).map(d => d.id);
      if (departmentIds.length === 0) {
        return { data: [], total: 0 }; // 无数据时提前返回
      }
  
      const queryBuilder = this.department
        .createQueryBuilder('department')
        .leftJoinAndSelect('department.chargeId', 'charge')
        .leftJoinAndSelect('department.positions', 'positions')
        .leftJoinAndSelect('positions.users', 'users')
        .where('department.id IN (:...departmentIds)', { departmentIds })
        .orderBy('department.id', 'DESC');
  
      const totalQuery = this.department
        .createQueryBuilder('department')
        .select('COUNT(department.id)', 'count');
  
      const [departments, totalResult] = await Promise.all([
        queryBuilder.getMany(),
        totalQuery.getRawOne()
      ]);
  
      const data = departments.map(department => ({
        id: department.id,
        name: department.name,
        dtype: department.dtype,
        createdAt: department.createdAt,
        updatedAt: department.updatedAt,
        charge: department.chargeId ? {
          id: department.chargeId.id,
          username: department.chargeId.username,
          realname: department.chargeId.realName
        } : null,
        positionCount: department.positions?.length || 0,
        positions: department.positions?.map(position => ({
          id: position.id,
          name: position.name,
          userCount: position.users?.length || 0,
          users: position.users?.map(user => ({
            id: user.id,
            username: user.username,
            realName: user.realName
          })) || []
        })) || []
      }));

      return {
        data,
        departmentTotal: Number(totalResult?.count || 0),
        positionTotal: data.reduce((acc, cur) => acc + cur.positionCount, 0),
      };
    } catch (error) {
      console.error(`查询失败: ${error.message}`, { 
        stack: error.stack 
      });
      throw new InternalServerErrorException('查询部门信息失败');
    }
  }
}
