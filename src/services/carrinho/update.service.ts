import { AppError } from "../../errors";

import {
  iCarrinho,
  iCarrinhoUpdate,
} from "../../interfaces/carrinho.interface";
import Carrinho from "../../models/Carrinho";
import { carrinhoSchema } from "../../schemas/carrinho.schema";

/**
 * Serviço para atualizar um Carrinho.
 *
 * @async
 * @function updateCarrinhoService
 * @param {iCarrinhoUpdate} payload - Os dados necessários para criar o Carrinho.
 * @param {number} id - Identificação do Carrinho atualizar seus dados.
 * @throws {AppError} Caso a atualização do Carrinho falhe.
 * @returns {Promise<iCarrinho>} O Carrinho atualizado e validado.
 *
 * @example
 * // Exemplo de payload
 * const payload = {
 *   idDistribuidor?: number;
 * };
 *
 * const updatedCarrinho = await updateCarrinhoService(id, payload);
 *
 * // Exemplo de resposta
 * {
 *  id: number;
 *  idDistribuidor: number;
 *  createdAt: Date;
 *  updatedAt: Date;
 * }
 */
const updateCarrinhoService = async (
  id: number,
  payload: iCarrinhoUpdate
): Promise<iCarrinho> => {
  const updatedCarrinho = await Carrinho.update(payload, { where: { id } });

  if (!updatedCarrinho) {
    throw new AppError("Não foi possível atualizar o Carrinho", 409);
  }

  const retrivedCarrinho = await Carrinho.findOne({ where: { id } });

  const parsedCarrinho = carrinhoSchema.parse(retrivedCarrinho);
  return parsedCarrinho;
};

export default updateCarrinhoService;
