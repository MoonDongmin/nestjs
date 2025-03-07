import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as process from "process";
import {ConfigService} from "@nestjs/configs";

@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  @Get('/db-host-from-configs')
  getDatabaseHostFromConfigService():string{
    return this.configService.get('DATABASE_HOST');
  }
}
