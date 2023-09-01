import {
    registerAs,
} from "@nestjs/config";

import {
    RdbmsEnvironment,
} from "@main/type/environment";

export default registerAs("rdbms",():RdbmsEnvironment=>({
    host:process.env.RDBMS_HOST || "127.0.0.1",
    port: parseInt(process.env.RDBMS_PORT!,10) || 15432,
    username: process.env.RDBMS_USERNAME || "scott",
    password:process.env.RDBMS_PASSWOR || "tiger",
    database:process.env.RDBMS_DATABASE || "exercise",
}));
