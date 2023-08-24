import { type Request, type Response } from "express";
import bcrypt from "bcryptjs";
import {
  crearUsuario,
  obtenerUsuarioPorEmail,
} from "../services/usuario.service";
import { generateToken } from "../utils/jwt-token";
import { handleHttpError } from "../utils/error.handle";
import { handleHttpSuccess } from "../utils/successHandle";

export const login = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const usuario = await obtenerUsuarioPorEmail(body.correoElectronico);
    console.log(usuario);
    if (usuario) {
      if (bcrypt.compareSync(body.contrasenia, usuario.contrasenia)) {
        const token = await generateToken(usuario.id);
        res.status(200).json({
          token,
          usuario: {
            email: usuario.correoElectronico,
            nombre: usuario.nombre,
          },
        });
      } else {
        handleHttpSuccess(res, usuario, "Contraseña Incorrecta", 400);
      }
    } else {
      handleHttpSuccess(
        res,
        usuario,
        "El Usuario no se encuentra Registrado",
        400
      );
    }
  } catch (error) {
    handleHttpError(
      "No se Pudo Obtener el usuario, Comuniquese con el Administrador",
      res,
      error
    );
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    let usuario = await obtenerUsuarioPorEmail(body.correoElectronico);
    if (usuario)
      handleHttpSuccess(
        res,
        usuario,
        "El Usuario ya se encuentra Registrado",
        400
      );
    else {
      const salt = bcrypt.genSaltSync();
      body.contrasenia = bcrypt.hashSync(body.contrasenia, salt);

      usuario = await crearUsuario(body);
      const token = await generateToken(usuario.id);
      handleHttpSuccess(
        res,
        {
          usuario: {
            email: usuario.correoElectronico,
            nombre: usuario.nombre,
          },
          token,
        },
        "Te has Registrado Exitosamente",
        201
      );
    }
  } catch (error) {
    handleHttpError(
      "No se ha podido Registrar, Comuniquese con el Administrador",
      res,
      error
    );
  }
};

export const renewToken = async (req: Request, res: Response) => {
  try {
    const { usuarioId } = req.body;
    const token = await generateToken(usuarioId);
    if (token)
      handleHttpSuccess(res, token, "Token Actualizado Correctamente", 200);
  } catch (error) {
    handleHttpError(
      "No se Pudo Actualizar el Token, Comuniquese con el Administrador",
      res,
      error
    );
  }
};
