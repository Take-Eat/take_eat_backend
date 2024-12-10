import { AppError } from "../../errors";
import { iEntregador } from "../../interfaces/entregador.interface";
import Entregador from "../../models/Entregador";
import { entregadorSchema } from "../../schemas/entregador.schema";

/**
  * Serviço para buscar um Entregador pelo seu ID.
 \*
  * @async
  * @function getEntregadorIdService
  * @param {number} id - Identificação do Entregador para retornar seus dados.
  * @throws {AppError} Caso não seja encontrado o Entregador.
  * @returns {Promise<iEntregador>} O Entregador encontrado e validado.
 \*
  * @example
  * // Exemplo de chamada
  * const retrivedEntregador = await getEntregadorIdService(2);
  * // Exemplo de retorno
 * {
    id: number;
    endereco: string;
    idUsuario: number;
    createdAt: Date;
    updatedAt: Date;
    nome: string;
    cpf: string;
    cnh: string;
 * }
 */

const getEntregadorIdService = async (id: number): Promise<iEntregador> => {
  const retrivedEntregador = await Entregador.findOne({
    where: { id, deletedAt: null },
  });

  if (!retrivedEntregador) {
    throw new AppError("Entregador nao encontrado!", 404);
  }

  return entregadorSchema.parse(retrivedEntregador);
};

export default getEntregadorIdService;
