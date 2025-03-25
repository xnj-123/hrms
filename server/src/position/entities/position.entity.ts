import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  Index
} from 'typeorm';
import { Department } from '../../department/entities/department.entity';
import { User } from '../../user/entities/user.entity';

@Entity('positions')  // 修正表名
export class Position {
  @PrimaryGeneratedColumn({ type: 'int', comment: '职位主键ID' })
  id: number;

  @Column({ 
    type: 'varchar', 
    length: 50,
    comment: '职位名称' 
  })
  name: string;

  @ManyToOne(() => Department, department => department.positions, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @OneToMany(() => User, user => user.positionId, {
    cascade: ['insert'],
    onDelete: 'CASCADE' 
  })
  users: User[];

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;
  
  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

}