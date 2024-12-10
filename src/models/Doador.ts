import { DataTypes, Model } from "sequelize";

import sequelize from "../db/connect";
import { iDoador, iDoadorCreate } from "../interfaces/doador.interface";
import User from "./User";

class Doador extends Model<iDoador, iDoadorCreate> {
  declare id: number;
  declare razaoSocial: string;
  declare cnpj: string;
  declare endereco: string;
  declare ramoAlimenticio: string;
  declare horarioRetirada: string;
  declare idUsuario: number;
  declare deletedAt: Date | null;
}

Doador.init(
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
    ramoAlimenticio: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 255], // mínimo de 3 caracteres, máximo de 255 caracteres
      },
    },
    horarioRetirada: {
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
  { sequelize, modelName: "Doador" }
);

// Relações de um pra muitos
Doador.belongsTo(User, { onDelete: "cascade", foreignKey: "idUsuario" });
User.hasOne(Doador, { foreignKey: "idUsuario" });

export default Doador;
