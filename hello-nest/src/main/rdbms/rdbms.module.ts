import {
    Module, 
} from '@nestjs/common';

import {
    ConfigModule, 
} from "@nestjs/config";
import {
    RdbmsService, 
} from "@main/rdbms/rdbms.service";

import rdbmsConfig from "@main/configurer/rdbms.config";

@Module({
    imports:[
        ConfigModule.forFeature(rdbmsConfig),
    ],
    providers: [
        RdbmsService,
    ],
})
export class RdbmsModule {}
