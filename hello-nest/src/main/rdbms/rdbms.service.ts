import {
    Inject,
    Injectable,
} from "@nestjs/common";
import rdbmsConfig from "@main/configurer/rdbms.config";
import {
    ConfigType, 
} from "@nestjs/config";

@Injectable()
export class RdbmsService {
    constructor(
      @Inject(rdbmsConfig.KEY) private config:ConfigType<typeof rdbmsConfig>,
    ) {
    }

    getUri():string {
        const{
            host,
            port,
            username,
            password,
            database,
        } = this.config;

        return `${username}: ${password}@${host}:${port}/${database}`;
    }
}
