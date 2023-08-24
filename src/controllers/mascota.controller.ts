import { type Request, type Response } from "express";
import { handleHttpError } from "../utils/error.handle";
import {
  actualizarMascota,
  crearMascota,
  eliminarMascota,
  obtenerMascota,
  obtenerMascotas,
} from "../services/mascota.service";
import { handleHttpSuccess } from "../utils/successHandle";

export const getMascotas = async (req: Request, res: Response) => {
  try {
    const mascotas = await obtenerMascotas();
    if (mascotas.length === 0)
      handleHttpSuccess(res, mascotas, "No se han Registrado Mascotas", 200);
    else
      handleHttpSuccess(res, mascotas, "Mascotas Obtenidas Correctamente", 200);
  } catch (error) {
    handleHttpError(
      "No se pudo Obtener las mascotas, Comuniquese con el Administrador",
      res,
      error
    );
  }
};

export const postMascota = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const mascotaNueva = await crearMascota(body);
    handleHttpSuccess(res, mascotaNueva, "Mascota Creada Correctamente", 201);
  } catch (error) {
    handleHttpError(
      "No se pudo Crear la Mascota, Comuniquese con el Administrador",
      res,
      error
    );
  }
};

export const putMascota = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const mascotaActualizada = await actualizarMascota(Number(id), body);
    if (!mascotaActualizada)
      handleHttpSuccess(
        res,
        mascotaActualizada,
        "No se ha Encontrado la Mascota Especificada",
        404
      );
    else
      handleHttpSuccess(
        res,
        mascotaActualizada,
        "Mascota Actualizada Correctamente",
        200
      );
  } catch (error) {
    handleHttpError(
      "No se Pudo Actualizar la Mascota, Comuniquese con el Administrador",
      res,
      error
    );
  }
};

export const deleteMascota = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const mascotaEliminada = await eliminarMascota(Number(id));
    if (!mascotaEliminada)
      handleHttpSuccess(
        res,
        mascotaEliminada,
        "No se ha Encontrado la Mascota Especificada",
        404
      );
    else
      handleHttpSuccess(
        res,
        mascotaEliminada,
        "Mascota Eliminada Correctamente",
        200
      );
  } catch (error) {
    handleHttpError(
      "No se Pudo Eliminar la Mascota, Comuniquese Con el Administrador",
      res,
      error
    );
  }
};

export const getMascota = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const mascota = await obtenerMascota(Number(id));
    if (!mascota)
      handleHttpSuccess(
        res,
        mascota,
        "No se ha Encontrado la Mascota Especificada",
        404
      );
    else handleHttpSuccess(res, mascota, "Mascota Obtenida Correctamente", 200);
  } catch (error) {
    handleHttpError(
      "No se podo Obtener la Mascota, Comuniquese con el Administrador",
      res,
      error
    );
  }
};
