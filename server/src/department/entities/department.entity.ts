import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany, 
  ManyToOne,
  JoinColumn,
  Index
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Position } from '../../position/entities/position.entity';

@Entity('departments') 
export class Department {
  @PrimaryGeneratedColumn({ type: 'int', comment: '部门主键ID' })
  id: number;

  @Column({ type: 'varchar', length: 50, comment: '部门名称' })
  @Index({ fulltext: true })
  name: string;

  @Column({ type: 'varchar', length: 50, comment: '部门类别' })
  dtype: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;
  
  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => User, user => user.managedDepartments, {
    onDelete: 'SET NULL',
    nullable: true
  })
  @JoinColumn({ name: 'charge_id' })
  chargeId: User | null;

  @OneToMany(() => Position, position => position.department, {
    cascade: ['insert'],
    onDelete: 'CASCADE' 
  })
  positions: Position[];
}