import { Injectable, NotFoundException, ConflictException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';
import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Position } from './entities/position.entity';
import { Department } from 'src/department/entities/department.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class PositionService {
  constructor(@InjectRepository(Position) private readonly position: Repository<Position>,@InjectRepository(Department)
  private department: Repository<Department>,private dataSource: DataSource) { }
  

  async create(createPositionDto: CreatePositionDto) {
    const departmentId = createPositionDto.departmentId;
    const name = createPositionDto.name;

    const department = await this.department.findOne({
      where: { id: departmentId },
    });
    if (!department) {
      throw new NotFoundException('Department not found');
    }

    const existing = await this.position.findOne({
      where: { name: name },
    });
    if (existing) {
      throw new ConflictException('Position name already exists');
    }

    const position = this.position.create({
      name: createPositionDto.name,
      department,
    });

    this.position.save(position);
    
    return true;
  }

  async findAll(query: {
    departmentId?: number;
    page?: number;
    pageSize?: number;
  }) {
    const page = Math.max(query.page || 1, 1);
    const pageSize = Math.min(Math.max(query.pageSize || 10, 1), 100);
  
    const queryBuilder = this.position
      .createQueryBuilder('position')
      .leftJoin('position.users', 'users')
      .leftJoinAndSelect('position.department', 'department')
      .select([
        'position.id as id',
        'position.name as name',
        'position.createdAt as createdAt',
        'position.updatedAt as updatedAt',
        'department.id as departmentId',
        'department.name as departmentName',
        'COUNT(users.id) AS userCount'
      ])
      .groupBy('position.id, department.id')
      .orderBy('position.createdAt', 'DESC')
      .skip((page - 1) * pageSize)
      .take(pageSize);
  
    if (query.departmentId) {
      queryBuilder.where('department.id = :id', { 
        id: query.departmentId 
      });
    }
  
    const rawResults = await queryBuilder.getRawMany();
    const total = await queryBuilder.getCount();

    const data = rawResults.map(row => ({
      id: row.id,
      name: row.name,
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
      department: {
        id: row.departmentId,
        name: row.departmentName,
      },
      userCount: parseInt(row.usercount) || 0 
    }));
    
    return { data, total };
  }

  async findOne(id: number){
    const queryBuilder = this.position
      .createQueryBuilder('position')
      .leftJoin('position.users', 'users')
      .leftJoinAndSelect('position.department', 'department')
      .select([
        'position.id as id',
        'position.name as name',
        'position.createdAt as createdAt',
        'position.updatedAt as updatedAt',
        'department.id as departmentId',
        'department.name as departmentName',
        'COUNT(users.id) AS userCount' // 保持统计逻辑一致
      ])
      .where('position.id = :id', { id })
      .groupBy('position.id, department.id'); // 保持分组条件
  
    const rawResult = await queryBuilder.getRawOne();
  
    if (!rawResult) {
      throw new NotFoundException(`Position with ID ${id} not found`);
    }
  
    return {
      id: rawResult.id,
      name: rawResult.name,
      createdAt: rawResult.createdAt,
      updatedAt: rawResult.updatedAt,
      department: {
        id: rawResult.departmentId,
        name: rawResult.departmentName
      },
      userCount: parseInt(rawResult.usercount) || 0 
    };
  }

  update(id: number, updatePositionDto: UpdatePositionDto) {
    return `This action updates a #${id} position`;
  }

  remove(id: number) {
    this.dataSource.transaction(async manager => {
      const positions = await manager.findOne(Position, {
        where: { id },
        relations: ['users']
      });
  
      if (!positions) {
        throw new NotFoundException(`职位 ${id} 不存在`);
      }
  
      const hasActiveUsers = positions.users.length > 0
      if (hasActiveUsers) {
        throw new ConflictException('部门下存在在职员工，禁止删除');
      }

      await manager.remove(Position, positions);  
      
    });

    return true;
  }

}
