import { DataTypes, Model } from "sequelize";

import sequelize from "../db/connect";
import { iPedido, iPedidoCreate } from "../interfaces/pedido.interface";
import Distribuidor from "./Distribuidor";

class Pedido extends Model<iPedido, iPedidoCreate> {
  declare id: number;
  declare statusEntrega: string;
  declare idDistribuidor: number;
}

Pedido.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    statusEntrega: {
      type: DataTypes.ENUM,
      values: ["Pendente", "Preparando", "Enviado", "Entregue"],
      allowNull: false,
    },
    idDistribuidor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: { type: DataTypes.DATE },
  },
  { sequelize, modelName: "Pedido" }
);

// Relações de um pra muitos
Pedido.belongsTo(Distribuidor, {
  onDelete: "cascade",
  foreignKey: "idDistribuidor",
});
Distribuidor.hasMany(Pedido, { foreignKey: "idDistribuidor" });

export default Pedido;
