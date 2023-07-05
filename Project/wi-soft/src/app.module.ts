import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersController } from "./users/users.controller";
import { UsersService } from "./users/users.service";
import { EmailService } from "./users/email/email.service";

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService,EmailService],
})
export class AppModule {}

// root 모듈을 생성