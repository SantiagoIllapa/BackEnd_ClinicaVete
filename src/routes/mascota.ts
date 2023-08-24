import { Router } from "express";
import {
  deleteMascota,
  getMascota,
  getMascotas,
  postMascota,
  putMascota,
} from "../controllers/mascota.controller";

const mascotaRoutes = Router();

mascotaRoutes.get("/", getMascotas);
mascotaRoutes.post("/", postMascota);
mascotaRoutes.put("/:id", putMascota);
mascotaRoutes.delete("/:id", deleteMascota);
mascotaRoutes.get("/:id", getMascota);

export default mascotaRoutes;
