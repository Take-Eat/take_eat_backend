import { AppError } from "../../errors";
import { iCarrinhoWithProduto } from "../../interfaces/carrinho.interface";
import Carrinho from "../../models/Carrinho";
import Produto from "../../models/Produto";
import { carrinhoWithProdutoSchema } from "../../schemas/carrinho.schema";
import getProdutoIdService from "../produto/getProduto.service";
import getCarrinhoProdutoIdService from "./getCarrinhoProduto.service";

/**
  * Serviço para buscar um AddProduto pelo seu ID.
 \*
  * @async
  * @function AddProdutoCarrinhoIdService
  * @param {number} idCarrinho - Identificação do carrinho para adicionar o produto.
  * @param {number} idProduto - Identificação do Produto a ser adicionado.
  * @throws {AppError} Caso não seja encontrado o carrinho ou o produto.
  * @returns {Promise<iCarrinhoWithProduto>} O Carrinho com os seus produtos validado.
 \*
  * @example
  * // Exemplo de chamada
  * const retrivedAddProdutos = await AddProdutoIdService(2);
  * // Exemplo de retorno
 * {
 *   id: 2,
 *   totalDoado: 200.50,
 *   idApoiador: 1,
 *   createdAt: "2024-12-01T12:00:00.000Z",
 *   updatedAt: "2024-12-01T12:00:00.000Z",
 *   produtos: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        tipo: string;
        quantidade: number;
        tempoDisponivel: string;
        idDoador: number;
    }[];
 * }
 */

const AddProdutoCarrinhoIdService = async (
  idCarrinho: number,
  idProduto: number
): Promise<iCarrinhoWithProduto> => {
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

  retrivedCarrinho.addProduto(retrivedProduto);

  const carrinhoWithNewProduto = await getCarrinhoProdutoIdService(idCarrinho);

  return carrinhoWithProdutoSchema.parse(carrinhoWithNewProduto);
};

export default AddProdutoCarrinhoIdService;
