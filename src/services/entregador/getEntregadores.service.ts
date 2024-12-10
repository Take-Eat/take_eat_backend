import { AppError } from "../../errors";
import { iEntregador } from "../../interfaces/entregador.interface";
import Entregador from "../../models/Entregador";
import { entregadorSchema } from "../../schemas/entregador.schema";

/**
  * Serviço para buscar todos os Entregadores.
 \*
  * @async
  * @function getEntregadoresService
  * @param {number} page - Paginação das buscas.
  * @param {number} limit - Quantidade de Entregadores que será retornado.
  * @throws {AppError} Caso não seja encontrado nenhum entregador.
  * @returns {Promise<iEntregador[]>}  Os Entregadores encontrados e validados.
 \*
  * @example
  * // Exemplo de chamada
  * const resultado = await getEntregadoresService(1, 15);
 \*
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

const getEntregadoresService = async (
  page: number,
  limit: number
): Promise<iEntregador[]> => {
  const offset = (page - 1) * limit;

  const retrivedEntregadores = await Entregador.findAll({
    offset,
    limit,
  });

  if (!retrivedEntregadores) {
    throw new AppError("Não existe nenhum entregador registrado!", 404);
  }

  return entregadorSchema.array().parse(retrivedEntregadores);
};

export default getEntregadoresService;
