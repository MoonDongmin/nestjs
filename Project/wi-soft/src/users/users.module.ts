import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService] // UsersService를 쓰겠다. : 프로바이더의 역할
})
export class UsersModule {}
