import { AppError } from "../../errors";
import { iDistribuidor } from "../../interfaces/distribuidor.interface";
import Distribuidor from "../../models/Distribuidor";
import { distribuidorSchema } from "../../schemas/distribuidor.schema";

/**
  * Serviço para buscar um Distribuidor pelo seu ID.
 \*
  * @async
  * @function getDistribuidorIdService
  * @param {number} id - Identificação do Distribuidor para retornar seus dados.
  * @throws {AppError} Caso não seja encontrado o Distribuidor.
  * @returns {Promise<iDistribuidor>} O Distribuidor encontrado e validado.
 \*
  * @example
  * // Exemplo de chamada
  * const retrivedDistribuidor = await getDistribuidorIdService(2);
  * // Exemplo de retorno
 * {
    id: number;
    razaoSocial: string;
    cnpj: string;
    endereco: string;
    idUsuario: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
 * }
 */

const getDistribuidorIdService = async (id: number): Promise<iDistribuidor> => {
  const retrivedDistribuidor = await Distribuidor.findOne({
    where: { id, deletedAt: null },
  });

  if (!retrivedDistribuidor) {
    throw new AppError("Distribuidor nao encontrado!", 404);
  }

  return distribuidorSchema.parse(retrivedDistribuidor);
};

export default getDistribuidorIdService;
