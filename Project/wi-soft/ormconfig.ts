import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3305,
  username: "root",
  password: "test",
  database: "test",
  entities: [__dirname + "/**/*.entity{.ts, js"],
  synchronize: true,
  migrationsRun: true,
  migrations: [__dirname + "/**/migrations/*.js"],
  migrationsTableName: "migrations"
});