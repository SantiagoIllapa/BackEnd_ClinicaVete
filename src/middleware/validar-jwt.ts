import { type NextFunction, type Request, type Response } from "express";
import jwt from "jsonwebtoken";
export const validarJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      ok: false,
      error: "Necesita Estar Autenticado para realizar esta acción",
    });
  }

  try {
    const payload: any = jwt.verify(
      token,
      process.env.SECRET_JWT_SEED ?? "secret"
    );
    console.log(payload.id);
    req.body.usuarioId = payload.id;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      error: "No se ha Autenticado correctamente",
    });
  }
  next();
};
