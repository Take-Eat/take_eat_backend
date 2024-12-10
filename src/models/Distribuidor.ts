import { DataTypes, Model } from "sequelize";

import sequelize from "../db/connect";
import {
  iDistribuidor,
  iDistribuidorCreate,
} from "../interfaces/distribuidor.interface";
import User from "./User";

class Distribuidor extends Model<iDistribuidor, iDistribuidorCreate> {
  declare id: number;
  declare razaoSocial: string;
  declare cnpj: string;
  declare endereco: string;
  declare idUsuario: number;
  declare deletedAt: Date | null;
}

Distribuidor.init(
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
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: { type: DataTypes.DATE },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true, // Permitir valor nulo
      defaultValue: null, // Valor padrão é null
    },
  },
  { sequelize, modelName: "Distribuidor" }
);

// Relações de um pra muitos
Distribuidor.belongsTo(User, { onDelete: "cascade", foreignKey: "idUsuario" });
User.hasOne(Distribuidor, { foreignKey: "idUsuario" });

export default Distribuidor;
