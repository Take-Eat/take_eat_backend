import { DataTypes, Model } from "sequelize";

import sequelize from "../db/connect";
import { iCarteira, iCarteiraCreate } from "../interfaces/carteira.interface";
import Apoiador from "./Apoiador";

class Carteira extends Model<iCarteira, iCarteiraCreate> {
  declare id: number;
  declare totalDoado: number;
  declare idApoiador: string;
}

Carteira.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    saldoEatCoin: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    totalEatCoin: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
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
  { sequelize, modelName: "Carteira" }
);

// Relações de um pra muitos
Carteira.belongsTo(Apoiador, { onDelete: "cascade", foreignKey: "idApoiador" });
Apoiador.hasMany(Carteira, { foreignKey: "idApoiador" });

export default Carteira;
