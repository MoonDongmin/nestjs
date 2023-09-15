import {
    Module, 
} from "@nestjs/common";

import {
    AccountService, 
} from "@main/account/account.service";

import {
    AccountController, 
} from "@main/account/account.controller";

import {
    PrismaConfig, 
} from "@main/configurer/prisma.config";

@Module({
    providers: [
        AccountService,
        PrismaConfig,
    ],
    controllers: [
        AccountController,
    ],
})
export class AccountModule {
}
