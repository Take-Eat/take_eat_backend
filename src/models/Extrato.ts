import { DataTypes, Model } from "sequelize";

import sequelize from "../db/connect";
import { iExtrato, iExtratoCreate } from "../interfaces/extrato.interface";
import Apoiador from "./Apoiador";

class Extrato extends Model<iExtrato, iExtratoCreate> {
  declare id: number;
  declare totalDoado: number;
  declare idApoiador: number;
}

Extrato.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    totalDoado: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    idApoiador: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: { type: DataTypes.DATE },
  },
  { sequelize, modelName: "Extrato" }
);

// Relações de um pra muitos
Extrato.belongsTo(Apoiador, { onDelete: "cascade", foreignKey: "idApoiador" });
Apoiador.hasMany(Extrato, { foreignKey: "idApoiador" });

export default Extrato;
