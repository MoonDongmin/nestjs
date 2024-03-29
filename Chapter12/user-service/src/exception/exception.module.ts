import { Logger, Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from "./http-exceptioin.filter";

@Module({
  providers: [
    Logger,
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
  ],
})
export class ExceptionModule {
}