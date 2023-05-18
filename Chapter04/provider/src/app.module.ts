import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {BaseService} from "./base-service";
import {ServiceA} from "./service-A";
import {ServiceB} from "./service-B";

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, BaseService, ServiceA, ServiceB],
})
export class AppModule {}
