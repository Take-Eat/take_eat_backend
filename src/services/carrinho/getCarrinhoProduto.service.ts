import { AppError } from "../../errors";
import { iCarrinhoWithProduto } from "../../interfaces/carrinho.interface";
import Carrinho from "../../models/Carrinho";
import CarrinhoProduto from "../../models/CarrinhoProduto";
import Produto from "../../models/Produto";
import { carrinhoWithProdutoSchema } from "../../schemas/carrinho.schema";

/**
  * Serviço para buscar um Carrinho pelo seu ID.
 \*
  * @async
  * @function getCarrinhoIdService
  * @param {number} id - Identificação do Carrinho para retornar seus dados.
  * @throws {AppError} Caso não seja encontrado o Carrinho.
  * @returns {Promise<iCarrinhoWithProduto>} O Carrinho encontrado e validado.
 \*
  * @example
  * // Exemplo de chamada
  * const retrivedCarrinhos = await getCarrinhoIdService(2);
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

const getCarrinhoProdutoIdService = async (
  id: number
): Promise<iCarrinhoWithProduto> => {
  const retrivedCarrinho = await Carrinho.findOne({
    where: { id },
    include: [
      {
        model: CarrinhoProduto,
        as: "produtos",
        include: [
          {
            model: Produto,
            as: "produto",
          },
        ],
      },
    ],
  });

  if (!retrivedCarrinho) {
    throw new AppError("Não foi possível encontrar o Carrinho!", 404);
  }

  return carrinhoWithProdutoSchema.parse(retrivedCarrinho);
  // return retrivedCarrinho;
};

export default getCarrinhoProdutoIdService;
