import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentModule } from './department/department.module';
import { UserModule } from './user/user.module';
import { PositionModule } from './position/position.module';
import envConfig from '../config/env';

@Module({
  imports: [
      // 加载环境变量
      ConfigModule.forRoot({
        isGlobal: true, // 设置为全局
        envFilePath: [envConfig.path], // 指定环境变量文件路径
      }),
      // 配置数据库连接
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => ({
          type: 'mysql', // 数据库类型
          entities: [], // 数据表实体
          host: configService.get('DB_HOST'), // 数据库地址
          port: configService.get<number>('DB_PORT'), // 数据库端口
          username: configService.get('DB_USER'), // 数据库用户名
          password: configService.get('DB_PASSWD'), // 数据库密码
          database: configService.get('DB_DATABASE'), // 数据库名称
          timezone: '+08:00', // 时区
          synchronize: true, // 自动同步数据库结构（生产环境建议关闭）
          retryDelay:500, //重试连接数据库间隔
          retryAttempts:3,//重试连接数据库的次数
          autoLoadEntities:true,
        }),
      }),
      DepartmentModule,
      UserModule,
      PositionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
