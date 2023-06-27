import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  private validateRequest(request: Request) {
    return false;
  }
}

// export interface ExecutionContext extends ArgumentsHost {
//   getClass<T = any>(): <T>;
//
//   getHandler(): Function;
// }
//
// export interface ArgumentsHost {
//   getArgs<T extends Array<any> = any[]>(): T;
//
//   getArgByIndex<T = any>(index: number): T;
//
//   switchToRpc(): RpcArgumentsHost;
//
//   switchToWs(): WsArgumentsHost;
//
//   getType<TContext extends string = >(): TContext;
// }
//
// export interface HttpArgumentsHost {
//   getRequest<T = any>(): T;
//
//   getResponse<T = any>(): T;
//
//   getNext<T = any>(): T;
// }
