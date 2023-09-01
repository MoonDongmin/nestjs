import {
    NestFactory,
} from "@nestjs/core";

import {
    AppModule,
} from "@main/app.module";

import {
    Logger as logger,
}from "@nestjs/common";

import appConfig from "@main/configurer/app.config";

import {
    ConfigType, 
} from "@nestjs/config";
import {
    LoggerService, 
} from "@main/common/logger/logger.service";

const context = "ApplicationInitializer";

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule,{
        bufferLogs:true,
    });
    const { host, port, } = app.get<ConfigType<typeof appConfig>>(appConfig.KEY);

    app.useLogger(app.get(LoggerService));
    await app.listen(port);
    logger.log(`Application is running on: ${host}:${port}`, context);
}

bootstrap()
    .then(() => {
        logger.log(`Current Environment Mode: ${process.env.NODE_ENV}`, context);
    })
    .catch((e) => {
        logger.error(e);
    });
