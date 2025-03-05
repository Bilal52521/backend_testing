import { Sequelize } from "sequelize";
import mysql2 from "mysql2"; // Ensure mysql2 is required
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    dialectModule: mysql2, // Specify mysql2 explicitly
    logging: false,
  }
);

const validateConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
};

validateConnection();

export default sequelize;
