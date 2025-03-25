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
import { Position } from '../../position/entities/position.entity';
import { Exclude } from 'class-transformer'; 

@Entity('users')
export class User {
    @PrimaryGeneratedColumn({ type: 'int', comment: '用户主键ID' })
    id: number;
  
    @Column({ 
      type: 'varchar',
      length: 50,
      comment: '用户名'
    })
    @Index({ unique: true })
    username: string;
  
    @Exclude()
    @Column({
      type: 'varchar',
      length: 255,
      name: 'password_hash',
      comment: '加密后的密码'
    })
    passwordHash: string;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false,
        name: 'real_name',
        comment: '真实姓名',
    })
    realName: string;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: true,
        comment: '用户头像',
    })
    avatar: string; 

    @Column({
        type: 'varchar',
        length: 20,
        nullable: true,
        comment: '用户手机',
    })
    phone: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: true,
        comment: '用户邮箱',
    })
    email: string;

    @ManyToOne(() => Department, department => department.positions, {
      onDelete: 'SET NULL'
    })
    @JoinColumn({ name: 'department_id' })
    departmentId: Department | null;

    @ManyToOne(() => Position, position => position.users, {
      onDelete: 'SET NULL'
    })
    @JoinColumn({ name: 'position_id' })
    positionId: Position | null;
  
    @OneToMany(() => Department, department => department.chargeId)
    managedDepartments: Department[];
  
    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;
    
    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;
}