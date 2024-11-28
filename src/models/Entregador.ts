import { DataTypes, Model } from "sequelize";

import sequelize from "../db/connect";
import {
  iEntregador,
  iEntregadorCreate,
} from "../interfaces/entregador.interface";
import User from "./User";

class Entregador extends Model<iEntregador, iEntregadorCreate> {
  declare id: number;
  declare nome: string;
  declare cpf: string;
  declare cnh: string;
  declare endereco: string;
  declare idUsuario: number;
}

Entregador.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 255], // mínimo de 3 caracteres, máximo de 255 caracteres
      },
    },
    cpf: {
      type: DataTypes.STRING(11),
      unique: true,
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 255], // mínimo de 3 caracteres, máximo de 255 caracteres
      },
    },
    cnh: {
      type: DataTypes.STRING(9),
      unique: true,
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
  { sequelize, modelName: "Entregador" }
);

// Relações de um pra muitos
Entregador.belongsTo(User, { foreignKey: "idUsuario" });
User.hasOne(Entregador, { foreignKey: "idUsuario" });

export default Entregador;
