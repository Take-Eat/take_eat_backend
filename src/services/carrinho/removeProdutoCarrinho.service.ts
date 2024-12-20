import { AppError } from "../../errors";
import Carrinho from "../../models/Carrinho";
import getProdutoIdService from "../produto/getProduto.service";

/**
  * Serviço para remover um produto do carrinho pelo seu idCarrinho e idProduto.
 \*
  * @async
  * @function removeProdutoCarrinhoIdService
  * @param {number} idCarrinho - Identificação do carrinho para remover o produto.
  * @param {number} idProduto - Identificação do Produto a ser removido.
  * @throws {AppError} Caso não seja encontrado o carrinho ou o produto.
  * @returns {Promise<void>}
 \*
  * @example
  * // Exemplo de chamada
  * const retrivedAddProdutos = await removeProdutoCarrinhoIdService(2, 1);
 */

const removeProdutoCarrinhoIdService = async (
  idCarrinho: number,
  idProduto: number
): Promise<void> => {
  const retrivedCarrinho = await Carrinho.findOne({
      where: { id: idCarrinho },
    }),
    retrivedProduto = await getProdutoIdService(idProduto);

  if (!retrivedCarrinho) {
    throw new AppError("Não foi possível encontrar o Carrinho!", 404);
  }

  if (!retrivedProduto) {
    throw new AppError("Não foi possível encontrar o Produto!", 404);
  }

  // Remove o Pedido do Carrinho
  retrivedCarrinho.removeProduto(retrivedProduto);

  return;
};

export default removeProdutoCarrinhoIdService;
