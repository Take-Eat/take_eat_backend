import { AppError } from "../../errors";

import {
  iCarteira,
  iCarteiraUpdate,
} from "../../interfaces/carteira.interface";
import Carteira from "../../models/Carteira";
import { carteiraSchema } from "../../schemas/carteira.schema";

/**
 * Serviço para atualizar um Carteira.
 *
 * @async
 * @function updateCarteiraService
 * @param {iCarteiraUpdate} payload - Os dados necessários para criar a Carteira.
 * @param {number} id - Identificação da Carteira para atualizar seus dados.
 * @throws {AppError} Caso a atualização da Carteira falhe.
 * @returns {Promise<iCarteira>} A Carteira atualizada e validada.
 *
 * @example
 * // Exemplo de payload
 * const payload = {
 *  saldoEatCoin?: number;
 *  totalEatCoin?: number;
 *  totalDoado?: number;
 * };
 *
 * const updatedCarteira = await updateCarteiraService(id, payload);
 *
 * // Exemplo de resposta
 * {
 *  id: number;
 *  saldoEatCoin: number;
 *  totalEatCoin: number;
 *  totalDoado: number;
 *  idApoiador: number;
 *  createdAt: Date;
 *  updatedAt: Date;
 * }
 */
const updateCarteiraService = async (
  id: number,
  payload: iCarteiraUpdate
): Promise<iCarteira> => {
  const updatedCarteira = await Carteira.update(payload, { where: { id } });

  if (!updatedCarteira) {
    throw new AppError("Não foi possível criar o Carteira", 409);
  }

  const retrivedCarteira = await Carteira.findOne({ where: { id } });

  const parsedCarteira = carteiraSchema.parse(retrivedCarteira);
  return parsedCarteira;
};

export default updateCarteiraService;
