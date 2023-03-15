import morgan from "morgan";
import express from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";

import constants from "../../config/constants.js";
import { limiter } from "./request-limiter.js";

const isDev = process.env.NODE_ENV.trim() === "development";
const isProd = process.env.NODE_ENV.trim() === "production";

export default (app) => {
  if (isProd) {
    app.use(compression());
    app.use(helmet());
  }
  if (isDev) {
    app.use(morgan("dev"));
    app.use(
      cors({
        origin: "http://localhost:3000",
      })
    );
  }
  app.use('/public',express.static('public'))
  app.use(limiter)
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.set("PORT", constants.PORT);
};
