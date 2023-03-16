import express from "express";
import { retailRoutes } from "./modules/retail/routes.js";

const v1Routes = express();

v1Routes.use("/retail", retailRoutes);

export default v1Routes;
