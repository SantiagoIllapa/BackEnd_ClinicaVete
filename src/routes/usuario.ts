import { Router } from "express";
import { login, register, renewToken } from "../controllers/usuario.controller";
import { validarJWT } from "../middleware/validar-jwt";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/renewToken", validarJWT, renewToken);

export default router;
