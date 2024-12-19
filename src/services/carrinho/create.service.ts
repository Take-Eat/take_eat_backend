import { AppError } from "../../errors";
import {
  iCarrinho,
  iCarrinhoCreate,
} from "../../interfaces/carrinho.interface";
import Carrinho from "../../models/Carrinho";
import { carrinhoSchema } from "../../schemas/carrinho.schema";

/**
 * Serviço para criar um novo Carrinho.
 *
 * @async
 * @function createCarrinhoService
 * @param {iCarrinhoCreate} payload - Os dados necessários para criar o Carrinho.
 * @throws {AppError} Caso a criação do Carrinho falhe.
 * @returns {Promise<iCarrinho>} O Carrinho criado e validado.
 *
 * @example
 * // Exemplo de payload
 * const payload = {
 *  idDistribuidor: number;
 * };
 *
 * const novoCarrinho = await createCarrinhoService(payload);
 *
 * // Exemplo de resposta
 * {
 *  id: number;
 *  createdAt: Date;
 *  updatedAt: Date;
 *  idDistribuidor: number;
 * }
 */
const createCarrinhoService = async (
  payload: iCarrinhoCreate
): Promise<iCarrinho> => {
  // Criação do Carrinho no banco de dados
  const createdCarrinho = await Carrinho.create(payload);

  // Lançar erro caso a criação falhe
  if (!createdCarrinho) {
    throw new AppError("Não foi possível criar o Carrinho", 409);
  }

  // Validar o Carrinho criado com o schema
  const parsedCarrinho = carrinhoSchema.parse(createdCarrinho);

  return parsedCarrinho;
};

export default createCarrinhoService;
