import { DataTypes, Model, type ModelAttributes } from "sequelize";
import { sequelize } from "../database/db";
import { type IUsuario } from "../interfaces/usuario.interface";

class UsuarioModel extends Model<IUsuario> implements IUsuario {
  public id!: number;
  public nombre!: string;
  public correoElectronico!: string;
  public contrasenia!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

const attributes: ModelAttributes<UsuarioModel, IUsuario> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correoElectronico: {
    type: DataTypes.STRING,
    allowNull: false,
    // unique: true
    // allowNull: false
  },
  contrasenia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

UsuarioModel.init(attributes, {
  sequelize,
  modelName: "usuarios",
});

export default UsuarioModel;
