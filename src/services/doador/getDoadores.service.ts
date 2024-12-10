import { AppError } from "../../errors";
import { iDoador } from "../../interfaces/doador.interface";
import Doador from "../../models/Doador";
import { doadorSchema } from "../../schemas/doador.schema";

/**
  * Serviço para buscar todos os doadores.
 \*
  * @async
  * @function getDoadoresService
  * @param {number} page - Paginação das buscas.
  * @param {number} limit - Quantidade de doadores que será retornado.
  * @throws {AppError} Caso não seja encontrado nenhum doador.
  * @returns {Promise<iDoador[]>}  Os doadores encontrados e validados.
 \*
  * @example
  * // Exemplo de chamada
  * const resultado = await getDoadoresService(1, 15);
 \*
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

const getDoadoresService = async (
  page: number,
  limit: number
): Promise<iDoador[]> => {
  const offset = (page - 1) * limit;

  const retrivedDoadores = await Doador.findAll({
    offset,
    limit,
  });

  if (!retrivedDoadores) {
    throw new AppError("Não existe nenhum doador registrado!", 404);
  }

  return doadorSchema.array().parse(retrivedDoadores);
};

export default getDoadoresService;
