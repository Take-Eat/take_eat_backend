import { AppError } from "../../errors";

import {
  iCarrinho,
  iCarrinhoWithProduto,
} from "../../interfaces/carrinho.interface";
import { iCarrinhoProdutoUpdate } from "../../interfaces/carrinhoProduto.interface";
import CarrinhoProduto from "../../models/CarrinhoProduto";
import { carrinhoWithProdutoSchema } from "../../schemas/carrinho.schema";
import getCarrinhoProdutoIdService from "./getCarrinhoProduto.service";

/**
 * Serviço para atualizar um Carrinho.
 *
 * @async
 * @function updateCarrinhoService
 * @param {iCarrinhoUpdate} payload - Os dados necessários para atualizar o Carrinho.
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
  payload: iCarrinhoProdutoUpdate
): Promise<iCarrinhoWithProduto> => {
  const updatedCarrinho = await CarrinhoProduto.update(payload, {
    where: { id },
  });

  if (!updatedCarrinho) {
    throw new AppError("Não foi possível atualizar o Carrinho", 409);
  }

  return await getCarrinhoProdutoIdService(id);
};

export default updateCarrinhoService;
