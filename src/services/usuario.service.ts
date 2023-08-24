import { type IUsuario } from "../interfaces/usuario.interface";
import UsuarioModel from "../models/usuario.model";

export const crearUsuario = async (usuario: IUsuario): Promise<IUsuario> => {
  return await UsuarioModel.create(usuario);
};

export const obtenerUsuarioPorEmail = async (
  correoElectronico: string
): Promise<IUsuario | null> => {
  const usuario = await UsuarioModel.findOne({ where: { correoElectronico } });
  if (usuario) {
    const usuarioPlano: IUsuario = usuario.toJSON() as IUsuario;
    return usuarioPlano;
  }

  return null;
};
