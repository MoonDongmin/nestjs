import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as process from "process";
import {ConfigService} from "@nestjs/config";

@Controller()
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  @Get('/db-host-from-config')
  getDatabaseHostFromConfigService():string{
    return this.configService.get('DATABASE_HOST');
  }
}
