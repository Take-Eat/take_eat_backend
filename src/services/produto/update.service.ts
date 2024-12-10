import { AppError } from "../../errors";

import {
  iProduto,
  iProdutoCreate,
  iProdutoUpdate,
} from "../../interfaces/produto.interface";
import Produto from "../../models/Produto";
import { produtoSchema } from "../../schemas/produto.schema";

const updateProdutoService = async (
  id: number,
  payload: iProdutoUpdate
): Promise<iProduto> => {
  const updatedProduto = await Produto.update(payload, { where: { id } });

  if (!updatedProduto) {
    throw new AppError("Não foi possível atualizar o produto", 409);
  }

  const retrivedProduto = await Produto.findOne({ where: { id } });

  const parsedProduto = produtoSchema.parse(retrivedProduto);
  return parsedProduto;
};

export default updateProdutoService;
