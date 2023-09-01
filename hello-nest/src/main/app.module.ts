import {
    Module,
} from "@nestjs/common";

import {
    AppController,
} from "@main/app.controller";

import {
    AppService,
} from "@main/app.service";

import {
    ConfigModule, 
} from "@nestjs/config";
import {
    RdbmsModule, 
} from './rdbms/rdbms.module';
import {
    LoggerModule, 
} from './common/logger/logger.module';

import appConfig from "@main/configurer/app.config";

@Module({
    imports: [
        ConfigModule.forRoot({
            cache: true,
            isGlobal: true,
            load:[
                appConfig,
            ],
        }),
        RdbmsModule,
        LoggerModule,
    ],
    controllers: [AppController,],
    providers: [AppService,],
})

export class AppModule {
}
