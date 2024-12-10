import { AppError } from "../../errors";

import {
  iExtrato,
  iExtratoCreate,
  iExtratoUpdate,
} from "../../interfaces/extrato.interface";
import Extrato from "../../models/Extrato";
import { extratoSchema } from "../../schemas/extrato.schema";

/**
 * Serviço para atualizar um extrato.
 *
 * @async
 * @function updateExtratoService
 * @param {iExtratoUpdate} payload - Os dados necessários para criar o extrato.
 * @param {number} id - Identificação do extrato atualizar seus dados.
 * @throws {AppError} Caso a atualização do extrato falhe.
 * @returns {Promise<iExtrato>} O extrato atualizado e validado.
 *
 * @example
 * // Exemplo de payload
 * const payload = {
 *   totalDoado: 100.50,
 * };
 *
 * const updatedExtrato = await updateExtratoService(id, payload);
 *
 * // Exemplo de resposta
 * {
 *   id: 1,
 *   totalDoado: 100.50,
 *   idApoiador: 1,
 *   createdAt: "2024-12-01T12:00:00.000Z",
 *   updatedAt: "2024-12-01T12:00:00.000Z",
 * }
 */
const updateExtratoService = async (
  id: number,
  payload: iExtratoUpdate
): Promise<iExtrato> => {
  const updatedExtrato = await Extrato.update(payload, { where: { id } });

  if (!updatedExtrato) {
    throw new AppError("Não foi possível criar o extrato", 409);
  }

  const retrivedExtrato = await Extrato.findOne({ where: { id } });

  const parsedExtrato = extratoSchema.parse(retrivedExtrato);
  return parsedExtrato;
};

export default updateExtratoService;
