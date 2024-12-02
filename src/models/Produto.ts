import { DataTypes, Model } from "sequelize";
import sequelize from "../db/connect";
import { iProduto, iProdutoCreate } from "../interfaces/produto.interface";
import Doador from "./Doador";

class Produto extends Model<iProduto, iProdutoCreate> {
  declare id: number;
  declare name: string;
  declare tipo: string;
  declare quantidade: number;
  declare tempoDisponivel: string;
  declare idDoador: number;
}

Produto.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 55], // mínimo de 3 caracteres, máximo de 50 caracteres
      },
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 55], // mínimo de 3 caracteres, máximo de 50 caracteres
      },
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tempoDisponivel: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    idDoador: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: { type: DataTypes.DATE },
  },
  { sequelize, modelName: "Produto" }
);

// Relações de um pra muitos
Produto.belongsTo(Doador, { onDelete: "cascade", foreignKey: "idDoador" });
Doador.hasMany(Produto, { foreignKey: "idDoador" });

export default Produto;
