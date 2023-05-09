import {Controller, Get, Post, Body, Patch, Param, Delete, Query} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {VerfiyEmailDto} from "./dto/verfiy-email.dto";
import {UserLoginDto} from "./dto/user-login.dto";
import {UserInfo} from "./dto/UserInfo";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() dto: CreateUserDto):Promise<void> {
    console.log(dto);
  }

  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerfiyEmailDto): Promise<string>{
    console.log(dto);
    return;
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<void>{
    console.log(dto);
    return;
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<UserInfo>{
    console.log(userId);
    return;
  }

}
