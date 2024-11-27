import { DataTypes, Model } from "sequelize";

import sequelize from "../db/connect";
import { iApoiador, iApoiadorCreate } from "../interfaces/apoiador.interface";
import User from "./User";

class Apoiador extends Model<iApoiador, iApoiadorCreate> {
  declare id: number;
  declare razaoSocial: string;
  declare cnpj: string;
  declare endereco: string;
  declare mungango: string;
  declare instagram: string;
  declare x: string;
  declare idUsuario: string;
}

Apoiador.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    razaoSocial: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 255], // mínimo de 3 caracteres, máximo de 255 caracteres
      },
    },
    cnpj: {
      type: DataTypes.STRING(14),
      allowNull: false,
      unique: true,
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 255], // mínimo de 3 caracteres, máximo de 255 caracteres
      },
    },
    mungango: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [3, 55], // mínimo de 3 caracteres, máximo de 55 caracteres
      },
    },
    instagram: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [3, 55], // mínimo de 3 caracteres, máximo de 55 caracteres
      },
    },
    x: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [3, 55], // mínimo de 3 caracteres, máximo de 55 caracteres
      },
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: { type: DataTypes.DATE },
  },
  { sequelize, modelName: "Apoiador" }
);

// Relações de um pra muitos
Apoiador.belongsTo(User, { foreignKey: "idUsuario" });
User.hasMany(Apoiador, { foreignKey: "idUsuario" });

export default Apoiador;
