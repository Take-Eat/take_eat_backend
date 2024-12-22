import { AppError } from "../../errors";
import { iCarrinhoProdutoRemove } from "../../interfaces/carrinhoProduto.interface";
import Carrinho from "../../models/Carrinho";
import CarrinhoProduto from "../../models/CarrinhoProduto";
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
  * const retrivedAddProdutos = await removeProdutoCarrinhoIdService(payload);
 */

const removeProdutoCarrinhoIdService = async (
  payload: iCarrinhoProdutoRemove
): Promise<void> => {
  const carrinhoProduto = await CarrinhoProduto.findOne({
    where: { idCarrinho: payload.idCarrinho, idProduto: payload.idProduto },
  });

  if (!carrinhoProduto) {
    throw new AppError("Produto não encontrado no carrinho!", 404);
  }

  await carrinhoProduto.destroy(); // Remove o registro da tabela pivô

  return;
};

export default removeProdutoCarrinhoIdService;
