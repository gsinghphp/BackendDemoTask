import "reflect-metadata";
import * as express from "express";
import * as morgan from "morgan";
import * as cors from "cors";
import * as path from "path";
import "dotenv/config";

import {
  useExpressServer,
  RoutingControllersOptions,
} from "routing-controllers";

import { connect } from "./db";

const app = express();
app.use("/", express.static(path.join(__dirname, "../public")));

const { PORT = 7086 } = process.env;

app.use(morgan("dev"));
app.use(cors());
app.options("*", cors());

const routingControllersOptions: RoutingControllersOptions = {
  validation: true,
  classTransformer: true,
  routePrefix: "/api",
  controllers: [path.join(__dirname, "/controller/*.ts")],

  defaultErrorHandler: true,
};
useExpressServer(app, routingControllersOptions);
app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error("[Error]: ", err);
});

const run = async () => {
  await connect();
  app.listen(PORT, () =>
    // eslint-disable-next-line no-console
    console.info(`Server started, listening to PORT: ${PORT}`)
  );
};
run();
