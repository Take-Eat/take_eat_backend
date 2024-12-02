import { AppError } from "../../errors";
import { iProduto } from "../../interfaces/produto.interface";
import Produto from "../../models/Produto";
import { produtoSchema } from "../../schemas/produto.schema";

const getAllProdutosDoador = async (idDoador: number): Promise<iProduto[]> => {
  const retrivedProdutos = await Produto.findAll({
    where: { idDoador },
  });

  if (!retrivedProdutos) {
    throw new AppError("Não foi possível encontrar os produtos!", 404);
  }

  return produtoSchema.array().parse(retrivedProdutos);
};

export default getAllProdutosDoador;
