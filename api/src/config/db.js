import Sequelize from "sequelize";


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      port : process.env.DB_PORT,
      dialect: 'postgres' ,
      pool: {
        max: 50,
        min: 0,
        acquire: 1200000,
        idle: 1000000,
      },
      timezone: "+05:45",
    }
  );

export {sequelize}