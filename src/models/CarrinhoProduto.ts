import { DataTypes, Model } from "sequelize";

import sequelize from "../db/connect";
import {
  iCarrinhoProduto,
  iCarrinhoProdutoCreate,
} from "../interfaces/carrinhoProduto.interface";

class CarrinhoProduto extends Model<iCarrinhoProduto, iCarrinhoProdutoCreate> {
  declare id: number;
  declare quantidade: number;
  declare idProduto: number;
  declare idCarrinho: number;
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
    idCarrinho: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idProduto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize, modelName: "CarrinhoProduto" }
);

export default CarrinhoProduto;
