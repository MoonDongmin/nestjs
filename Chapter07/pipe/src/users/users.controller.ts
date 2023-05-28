import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query, ValidationPipe
} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(
      @Query('offset',new DefaultValuePipe(0), ParseIntPipe) offset: number,
      @Query('limit', new DefaultValuePipe(10),ParseIntPipe) limit: number,
  ) {
    console.log(offset, limit);

    return this.usersService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id',ParseIntPipe) id: number) {
  //   return this.usersService.findOne(+id);
  // }

  // @Get(':id')
  // findOne(@Param('id',new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE}))
  //             id: number) {
  //   return this.usersService.findOne(+id);
  // }

  @Get(':id')
  findOne(@Param('id',ValidationPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
