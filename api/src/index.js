import "./config/loadEnv.js";
import chalk from "chalk";
import { app } from "./app/index.js";
import { sequelize } from "./config/db.js";

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
    console.log("Wait for Express Application...........");
    const port = app.get("PORT");
    app
      .listen(port, () => {
        console.log(
          chalk.greenBright("Application Up and running on PORT " + port)
        );
      })
      .on("error", function (err) {
        if (err.code === "EADDRINUSE") {
          console.error(
            chalk.red(
              `----- Port ${port} is busy, try with port ${port + 1} -----`
            )
          );
        } else {
          console.error(chalk.red(err));
        }
      });
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });
