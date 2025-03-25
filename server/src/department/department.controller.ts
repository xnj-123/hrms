import { Controller, Get, Post, Body, Param, Delete, Query  } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post('create')
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentService.create(createDepartmentDto);
  }

  @Post('findAll')
  findAll(@Body() queryParam:{keyWord:string,dtype:string,page:number,pageSize:number}) {
    return this.departmentService.findAll(queryParam);
  }

  // @Get('find/:id')
  // findOne(@Param('id') id: string) {
  //   return this.departmentService.findOne(+id);
  // }

  @Post('edit/:id')
  update(@Param('id') id: string, @Body() updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentService.update(+id, updateDepartmentDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.departmentService.remove(+id);
  }
  
  @Get('detail')
  getDetail(){
    return this.departmentService.getDetail();
  }
}
