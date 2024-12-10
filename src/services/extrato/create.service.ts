import { AppError } from "../../errors";
import { iExtrato, iExtratoCreate } from "../../interfaces/extrato.interface";
import Extrato from "../../models/Extrato";
import { extratoSchema } from "../../schemas/extrato.schema";

/**
 * Serviço para criar um novo extrato.
 *
 * @async
 * @function createExtratoService
 * @param {iExtratoCreate} payload - Os dados necessários para criar o extrato.
 * @throws {AppError} Caso a criação do extrato falhe.
 * @returns {Promise<iExtrato>} O extrato criado e validado.
 *
 * @example
 * // Exemplo de payload
 * const payload = {
 *   totalDoado: 100.50,
 *   idApoiador: 1,
 * };
 *
 * const novoExtrato = await createExtratoService(payload);
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
const createExtratoService = async (
  payload: iExtratoCreate
): Promise<iExtrato> => {
  // Criação do extrato no banco de dados
  const createdExtrato = await Extrato.create(payload);
  console.log(createdExtrato);
  

  // Lançar erro caso a criação falhe
  if (!createdExtrato) {
    throw new AppError("Não foi possível criar o extrato", 409);
  }

  // Validar o extrato criado com o schema
  const parsedExtrato = extratoSchema.parse(createdExtrato);
  return parsedExtrato;
};

export default createExtratoService;
