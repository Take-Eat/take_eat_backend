import { AppError } from "../../errors";
import { iDoador } from "../../interfaces/doador.interface";
import Doador from "../../models/Doador";
import { doadorSchema } from "../../schemas/doador.schema";

/**
  * Serviço para buscar um doador pelo seu ID.
 \*
  * @async
  * @function getdoadorIdService
  * @param {number} id - Identificação do doador para retornar seus dados.
  * @throws {AppError} Caso não seja encontrado o doador.
  * @returns {Promise<iDoador>} O doador encontrado e validado.
 \*
  * @example
  * // Exemplo de chamada
  * const retrivedDoadores = await getDoadorIdService(2);
  * // Exemplo de retorno
 * {
 * id: number;
 * razaoSocial: string;
 * cnpj: string;
 * endereco: string;
 * idUsuario: number;
 * createdAt: Date;
 * updatedAt: Date;
 * ramoAlimenticio: string;
 * horarioRetirada: string;
 * }
 */

const getDoadorIdService = async (id: number): Promise<iDoador> => {
  const retrivedDoador = await Doador.findOne({
    where: { id },
  });

  if (!retrivedDoador) {
    throw new AppError("Doador nao encontrado!", 404);
  }

  return doadorSchema.parse(retrivedDoador);
};

export default getDoadorIdService;
