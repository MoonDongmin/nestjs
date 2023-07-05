import { Controller, Get, Post, Body, Patch, Param, Delete, Res, BadRequestException, Query } from "@nestjs/common";
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginDto } from "./dto/user-login.dto";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    const { name, email, password } = dto;
    await this.usersService.createUser(name, email, password);
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto){
    console.log(UserLoginDto);
    const {email, password}=dto;
    return await this.usersService.login(email, password);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    if(+id<1){
      throw new BadRequestException("id의 값은 0보다 큰 값이어야 합니다");
    }
    return this.usersService.getUserInfo(id);
  }

}
