import { DataTypes, Model } from "sequelize";

import sequelize from "../db/connect";
import {
  iProdutoPedido,
  iProdutoPedidoCreate,
} from "../interfaces/produtoPedido.interface";

class ProdutoPedido extends Model<iProdutoPedido, iProdutoPedidoCreate> {
  declare id: number;
  declare quantidade: number;
}

ProdutoPedido.init(
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
  { sequelize, modelName: "ProdutoPedido",  }
);

export default ProdutoPedido;
