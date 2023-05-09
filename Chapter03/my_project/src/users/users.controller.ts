import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Res,
    HttpCode,
    BadRequestException,
    Header, Redirect
} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        const {name, email} = createUserDto;
        return `유저를 생성했습니다. 이름: ${name}, 이메일: ${email}`;
    }

    @Get()
    findAll(@Res() res) {
        const users = this.usersService.findAll();
        return res.status(200).send(users);
    }

    // @Header('Custom', 'Test Header')
    // @Get(':id')
    // findOneWithHeader(@Param('id') id: string) {
    //     return this.usersService.findOne(+id);
    // }

    @Redirect('https://nestjs.com', 301)
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id);
    }


    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //     if (+id < 1) {
    //         throw new BadRequestException('id는 0보다 큰 값이어야 합니다.');
    //     }
    //     return this.usersService.findOne(+id);
    // }

    @HttpCode(202)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    }

    @Delete(':userId/dongmin/:dongminId')
    deleteUserDongmin(
        @Param('userId') userId: string,
        @Param('dongminId') dongminId: string,
    ) {
        return 'userId: &{userId}, dongminId: ${dongminId}';
    }
}
