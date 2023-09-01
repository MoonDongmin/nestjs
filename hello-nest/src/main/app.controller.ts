import {
    Controller, Get, Logger,
} from "@nestjs/common";
import {
    AppService, 
} from "@main/app.service";
import {
    AppEnvironment, 
} from "@main/type/environment";

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(
  ): string {
      return this.appService.getHello();
  }

  @Get("/config")
  getConfig(): AppEnvironment {
      const{ host,port, } = this.appService.getConfig();

      this.logger.log(`host: ${host}, port:${port}`);

      return  {
          host,
          port,
      };
  }
}
