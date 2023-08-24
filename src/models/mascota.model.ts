import { IMascota } from "../interfaces/mascota.interface";
import { DataTypes, Model, type ModelAttributes } from "sequelize";
import { sequelize } from "../database/db";

class MascotaModel extends Model<IMascota> implements IMascota {
  public id!: number;
  public nombre!: string;
  public edad!: string;
  public raza!: string;
  public nombreDueno!: string;
  public correoElectronicoDueno!: string;
  public sintomas!: string;
  public fecha!: Date;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

const attributes: ModelAttributes<MascotaModel, IMascota> = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  edad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  raza: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nombreDueno: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  correoElectronicoDueno: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sintomas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
};

MascotaModel.init(attributes, {
  sequelize,
  modelName: "mascotas",
});

export default MascotaModel;
