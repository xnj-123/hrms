import { Controller, Get, Post, Body, Patch, Param, Delete, Query,ClassSerializerInterceptor, UseInterceptors} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('findAll')
  // 根据传入的参数查询所有用户
  findAll(@Body() query:{keyWord:string,page:number,pageSize:number}) {
    // 调用userService的findAll方法，传入查询参数query
    return this.userService.findAll(query);
  }

  @Get('find/:id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post('getUserCode')
  findUserList( @Query('keyword') keyword: string) {
    return this.userService.findUserList(keyword);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Get('verify/:id')
  verify(@Param('id') id:string) {
    return this.userService.verify(+id);
  }
}
