import express from "express";
import { retailRoutes } from "./modules/retail/routes.js";
import swaggerUi from "swagger-ui-express"
import swaggerDocument  from "./swagger.json" assert { type: "json" }

const v1Routes = express();
v1Routes.use(
    '/docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );
v1Routes.use("/retail", retailRoutes);

export default v1Routes;
