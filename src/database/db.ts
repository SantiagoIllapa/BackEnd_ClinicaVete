import { Sequelize } from "sequelize";

const sequelize = new Sequelize("db_pets", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
});

const conexion = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { conexion, sequelize };
