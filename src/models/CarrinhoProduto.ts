import { DataTypes, Model } from "sequelize";

import sequelize from "../db/connect";
import {
  iCarrinhoProduto,
  iCarrinhoProdutoCreate,
} from "../interfaces/carrinhoProduto.interface";

class CarrinhoProduto extends Model<iCarrinhoProduto, iCarrinhoProdutoCreate> {
  declare id: number;
  declare quantidade: number;
}

CarrinhoProduto.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: { type: DataTypes.DATE },
  },
  { sequelize, modelName: "CarrinhoProduto" }
);

export default CarrinhoProduto;
