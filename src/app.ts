import "dotenv/config";
import express from "express";
import cors from "cors";
import mascotaRoutes from "./routes/mascota";
import usuarioRoutes from "./routes/usuario";
// import db from './config/db'
import { conexion } from "./database/db";

const PORT = process.env.PORT ?? 3000;
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

conexion()
  .then(() => {
    console.log("Conectado a la base de datos de PostgresSQL");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/mascota", mascotaRoutes);

app.use("/api/usuario", usuarioRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
