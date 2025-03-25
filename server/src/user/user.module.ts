import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity'
import { Department } from '../department/entities/department.entity';
import { Position } from '../position/entities/position.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User, Department, Position])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
