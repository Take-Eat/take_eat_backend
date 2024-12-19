import { DataTypes, Model } from "sequelize";

import sequelize from "../db/connect";
import { iCarrinho, iCarrinhoCreate } from "../interfaces/carrinho.interface";
import Distribuidor from "./Distribuidor";

class Carrinho extends Model<iCarrinho, iCarrinhoCreate> {
  declare id: number;
  declare idDistribuidor: number;
}

Carrinho.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    idDistribuidor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: { type: DataTypes.DATE },
  },
  { sequelize, modelName: "Carrinho" }
);

// Relações de um pra um
Carrinho.belongsTo(Distribuidor, {
  onDelete: "cascade",
  foreignKey: "idDistribuidor",
});
Distribuidor.hasOne(Carrinho, { foreignKey: "idDistribuidor" });

export default Carrinho;
