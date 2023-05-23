import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule, ConfigService} from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: (process.env.NODE_ENV === 'production') ? '.production.env'
        : (process.env.NODE_ENV === 'stage') ? '.stage.env' : '.development.env'
  })],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule { }