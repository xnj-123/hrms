// src/dto/create-department.dto.ts
// import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateDepartmentDto {
//   @IsString({ message: '部门名称必须是字符串' })
//   @IsNotEmpty({ message: '部门名称不能为空' })
  name: string;

//   @IsString({ message: '部门类别必须是字符串' })
//   @IsNotEmpty({ message: '部门类别不能为空' })
  dtype: string;

//   @IsOptional() // 可选字段
//   @IsNumber({}, { message: '负责人ID必须是数字' })
  chargeId?: number | null; // 允许 null 或未传值
}