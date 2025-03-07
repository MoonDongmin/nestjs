import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/configs";
import emailConfig from "./config/emailConfig";
import { validationSchema } from "./config/validationSchema";
import { UsersModule } from "./users/users.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as process from "process";
import { UserEntity } from "./users/entities/user.entity";

@Module({
  imports: [
    UsersModule,

    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      load: [emailConfig],
      isGlobal: true,
      validationSchema
    }),

    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DATABASE_HOST,//'localhost',
      port: 3305,
      username: process.env.DATABASE_USERNAME,//'project',
      password: process.env.DATABASE_PASSWORD,//'test',
      database: "test",
      entities: [UserEntity],
      synchronize: process.env.DATABASE_SYNCHRONIZE === "true",
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule {
}