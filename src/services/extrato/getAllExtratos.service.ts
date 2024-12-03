import { AppError } from "../../errors";
import { iExtrato } from "../../interfaces/extrato.interface";
import Extrato from "../../models/Extrato";
import { extratoSchema } from "../../schemas/extrato.schema";

/**
  * Serviço para buscar todos extratos de um APOIADOR.
 \*
  * @async
  * @function getAllExtrato
  * @param {number} idApoiador - Identificação do apoidor para buscar todos seus extratos.
  * @throws {AppError} Caso não seja encontrado nenhum extrato.
  * @returns {Promise<iExtrato[]>}  Os extratos encontrados e validados.
 \*
  * @example
  * // Exemplo de chamada
  * const retrivedExtratos = await getAllExtrato(2);
 \*
  * // Exemplo de retorno
 * {
 *   id: 1,
 *   totalDoado: 100.50,
 *   idApoiador: 1,
 *   createdAt: "2024-12-01T12:00:00.000Z",
 *   updatedAt: "2024-12-01T12:00:00.000Z",
 * },
 * {
 *   id: 2,
 *   totalDoado: 200.50,
 *   idApoiador: 1,
 *   createdAt: "2024-12-01T12:00:00.000Z",
 *   updatedAt: "2024-12-01T12:00:00.000Z",
 * }
 */

const getAllExtrato = async (idApoiador: number): Promise<iExtrato[]> => {
  const retrivedExtratos = await Extrato.findAll({
    where: { idApoiador },
  });

  if (!retrivedExtratos) {
    throw new AppError("Não foi possível encontrar o extrato!", 404);
  }

  return extratoSchema.array().parse(retrivedExtratos);
};

export default getAllExtrato;
