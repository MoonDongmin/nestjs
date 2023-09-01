import {
    registerAs,
} from "@nestjs/config";

import {
    AppEnvironment, 
} from "@main/type/environment";

export default registerAs("app",():AppEnvironment=>({
    host:process.env.APP_HOST || "localhost",
    port: parseInt(process.env.APP_PORT!,10) || 3000,
}));
