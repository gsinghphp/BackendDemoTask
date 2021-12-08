import "reflect-metadata";
import { createConnection } from "typeorm";
import * as path from "path";

const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

export const connect = async () => {
  return await createConnection({
    type: "mysql",
    host: DB_HOST,
    // port: parseInt(DB_PORT, 10),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: 3306,
    entities: [path.join(__dirname, "/entity/*.ts")],
    logging: true,
  }).catch(error =>
    // eslint-disable-next-line no-console
    console.log("DB_HOST", DB_HOST, error)
  );
};