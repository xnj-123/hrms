
export class CreatePositionDto {
    //   @IsString({ message: '部门名称必须是字符串' })
    //   @IsNotEmpty({ message: '部门名称不能为空' })
    name: string;
    
    //   @IsOptional() // 可选字段
    //   @IsNumber({}, { message: '负责人ID必须是数字' })
    departmentId: number; // 允许 null 或未传值
}