import {
    Injectable,
    LoggerService as NestLoggerService, LogLevel,
} from "@nestjs/common";
import {
    storage, 
} from "@main/common/logger/logger.storage";
import {
    Color, 
} from "@main/common/logger/logger.util";

@Injectable()
export class LoggerService implements NestLoggerService {
    private print(
        level: LogLevel,
        ...args: unknown[]
    ):void {
        const time = new Date().toISOString();
        const context = args.pop();
        const message = args.shift();
        const params = args.length !== 0 ? args : undefined;

        const requestId = storage.getStore();
        const result = `${time} | ${level} | ${context} - ${message}(${requestId})`;

        // eslint-disable-next-line no-console
        console.log(Color.fg.green,result, params, Color.reset);
    }

    debug(
        ...args: unknown[]
    ):void {
        this.print("debug", ...args);
    }

    error(
        ...args: unknown[]
    ):void {
        this.print("error", ...args);

    }

    fatal(
        ...args:unknown[]
    ):void {
        this.print("fatal", ...args);

    }

    log(
        ...args:unknown[]
    ):void {
        this.print("log", ...args);

    }

    verbose(
        ...args:unknown[]
    ):void {
        this.print("verbose", ...args);

    }

    warn(
        ...args:unknown[]
    ):void {
        this.print("warn", ...args);

    }

}
