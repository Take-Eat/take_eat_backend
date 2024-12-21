import { AppError } from "../../errors";
import { iCarrinhoWithProduto } from "../../interfaces/carrinho.interface";
import { iCarrinhoProdutoAdd } from "../../interfaces/carrinhoProduto.interface";
import Carrinho from "../../models/Carrinho";
import { carrinhoWithProdutoSchema } from "../../schemas/carrinho.schema";
import getProdutoIdService from "../produto/getProduto.service";
import getCarrinhoProdutoIdService from "./getCarrinhoProduto.service";

/**
  * Serviço para buscar um AddProduto pelo seu ID.
 \*
  * @async
  * @function AddProdutoCarrinhoIdService
  * @param {iCarrinhoProdutoAdd} payload - Dados para adicionar o produto no carrinho.
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
  payload: iCarrinhoProdutoAdd
): Promise<iCarrinhoWithProduto> => {
  const retrievedCarrinho = await Carrinho.findOne({
    where: { id: payload.idCarrinho },
  });
  const retrievedProduto = await getProdutoIdService(payload.idProduto);

  if (!retrievedCarrinho) {
    throw new AppError("Não foi possível encontrar o Carrinho!", 404);
  }

  if (!retrievedProduto) {
    throw new AppError("Não foi possível encontrar o Produto!", 404);
  }

  // Adicionando o produto ao carrinho com a quantidade
  retrievedCarrinho.addProduto({
    ...retrievedProduto,
    quantidade: payload.quantidade,
  });

  // await CarrinhoProduto.create({
  //   idCarrinho,
  //   idProduto,
  //   quantidade, // Salva a quantidade no pivô
  // });

  const carrinhoWithNewProduto = await getCarrinhoProdutoIdService(
    payload.idCarrinho
  );

  return carrinhoWithProdutoSchema.parse(carrinhoWithNewProduto);
};

export default AddProdutoCarrinhoIdService;
