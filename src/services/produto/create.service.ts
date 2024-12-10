import { AppError } from "../../errors";

import { iProduto, iProdutoCreate } from "../../interfaces/produto.interface";
import Produto from "../../models/Produto";
import { produtoSchema } from "../../schemas/produto.schema";

const createProdutoService = async (
  payload: iProdutoCreate
): Promise<iProduto> => {
  const createdProduto = await Produto.create(payload);

  if (!createdProduto) {
    throw new AppError("Não foi possível criar o produto", 409);
  }

  const parsedProduto = produtoSchema.parse(createdProduto);
  return parsedProduto;
};

export default createProdutoService;
