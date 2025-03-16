import { Sequelize } from "sequelize";
import mysql2 from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectModule: mysql2,
    logging: false,

    pool: {
      max: 15,
      min: 5,
      acquire: 30000,
      idle: 10000,
      evict: 5000,
    },

    dialectOptions: {
      multipleStatements: true,
      supportBigNumbers: true,
      bigNumberStrings: true,
    },

    retry: {
      max: 3,
    },
  }
);

const validateConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Unable to connect to the database");
  }
};

validateConnection();

export default sequelize;
