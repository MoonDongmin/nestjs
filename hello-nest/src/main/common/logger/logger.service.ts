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
    private formatLength(text: string) {

        const a = text.length;

        for (let i = 0; i < 7 - a; i++) {
            text += " ";
        }

        return text;
    }

    private print(
        level: LogLevel,
        ...args: unknown[]
    ): void {
        const time = new Date().toISOString();
        const context = args.pop();
        const message = args.shift();
        const params = args.length !== 0 ? args : undefined;

        const requestId = storage.getStore();
        const result = `${time} | ${this.formatLength(level)} | ${context} - ${message}(${requestId})`;

        switch (level) {
            case "debug":
                // eslint-disable-next-line no-console
                console.log(Color.fg.gray, result, params, Color.reset);
                break;
            case "error":
                // eslint-disable-next-line no-console
                console.log(Color.fg.red, result, params, Color.reset);
                break;

            case "log":
                // eslint-disable-next-line no-console
                console.log(Color.fg.yellow, result, params, Color.reset);
                break;

            case "warn":
                // eslint-disable-next-line no-console
                console.log(Color.fg.blue, result, params, Color.reset);
                break;

                // eslint-disable-next-line no-console
            default: console.log(Color.fg.white, result, params, Color.reset);
                break;

        }
    }

    debug(
        ...args: unknown[]
    ): void {
        this.print("debug", ...args);
    }

    error(
        ...args: unknown[]
    ): void {
        this.print("error", ...args);

    }

    fatal(
        ...args: unknown[]
    ): void {
        this.print("fatal", ...args);

    }

    log(
        ...args: unknown[]
    ): void {
        this.print("log", ...args);

    }

    verbose(
        ...args: unknown[]
    ): void {
        this.print("verbose", ...args);

    }

    warn(
        ...args: unknown[]
    ): void {
        this.print("warn", ...args);

    }

}
