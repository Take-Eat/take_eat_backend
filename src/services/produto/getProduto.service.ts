import { AppError } from "../../errors";
import { iProduto } from "../../interfaces/produto.interface";
import Produto from "../../models/Produto";
import { produtoSchema } from "../../schemas/produto.schema";

const getProdutoIdService = async (id: number): Promise<iProduto> => {
  const retrivedProduto = await Produto.findOne({
    where: { id },
  });

  if (!retrivedProduto) {
    throw new AppError("Não foi possível encontrar o produto!", 404);
  }

  return produtoSchema.parse(retrivedProduto);
};

export default getProdutoIdService;
