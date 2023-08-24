import { type IMascota } from "../interfaces/mascota.interface";
import MascotaModel from "../models/mascota.model";

export const crearMascota = async (mascota: IMascota): Promise<IMascota> => {
  return await MascotaModel.create(mascota);
};

export const obtenerMascotas = async (): Promise<IMascota[]> => {
  return await MascotaModel.findAll();
};

export const obtenerMascota = async (id: number): Promise<IMascota | null> => {
  const mascota = await MascotaModel.findByPk(id);
  return mascota;
};

export const actualizarMascota = async (
  id: number,
  mascota: IMascota
): Promise<IMascota | null> => {
  const [affectedCount] = await MascotaModel.update(mascota, {
    where: { id },
  });
  if (affectedCount === 0) return null;
  const mascotaActualizado = await MascotaModel.findByPk(id);
  return mascotaActualizado;
};

export const eliminarMascota = async (id: number): Promise<IMascota | null> => {
  const mascota = await MascotaModel.findOne({ where: { id } });
  if (!mascota) return null;
  await MascotaModel.destroy({ where: { id } });
  return mascota;
};
