import {
    join,
} from "path";
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
import {
    ServeStaticModule, 
} from "@nestjs/serve-static";

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
        ServeStaticModule.forRoot({
            rootPath: join(process.cwd(), "src/resource/static"),
        }),
    ],
    controllers: [AppController,],
    providers: [AppService,],
})

export class AppModule {
}
