
import express from "express";
import appConfiguration from "./middlewares/app-config.js";
import _err from "./_err.js";

// Routes Import
import v1Routes from "./v1/index.js";

const app = express();
app.listen()
appConfiguration(app);
app.use("/api/v1", v1Routes); // Version 1.0 routes - check@v1 directory
app.use(_err); // Error Handling Mechanism

export  {app};
