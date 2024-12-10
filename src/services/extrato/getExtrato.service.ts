import { AppError } from "../../errors";
import { iExtrato } from "../../interfaces/extrato.interface";
import Extrato from "../../models/Extrato";
import { extratoSchema } from "../../schemas/extrato.schema";

/**
  * Serviço para buscar um extrato pelo seu ID.
 \*
  * @async
  * @function getExtratoIdService
  * @param {number} id - Identificação do extrato para retornar seus dados.
  * @throws {AppError} Caso não seja encontrado o extrato.
  * @returns {Promise<iExtrato>} O extrato encontrado e validado.
 \*
  * @example
  * // Exemplo de chamada
  * const retrivedExtratos = await getExtratoIdService(2);
  * // Exemplo de retorno
 * {
 *   id: 2,
 *   totalDoado: 200.50,
 *   idApoiador: 1,
 *   createdAt: "2024-12-01T12:00:00.000Z",
 *   updatedAt: "2024-12-01T12:00:00.000Z",
 * }
 */

const getExtratoIdService = async (id: number): Promise<iExtrato> => {
  const retrivedExtrato = await Extrato.findOne({
    where: { id },
  });

  if (!retrivedExtrato) {
    throw new AppError("Não foi possível encontrar o extrato!", 404);
  }

  return extratoSchema.parse(retrivedExtrato);
};

export default getExtratoIdService;
