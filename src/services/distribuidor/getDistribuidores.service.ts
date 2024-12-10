import { AppError } from "../../errors";
import { iDistribuidor } from "../../interfaces/distribuidor.interface";
import Distribuidor from "../../models/Distribuidor";
import { distribuidorSchema } from "../../schemas/distribuidor.schema";

/**
  * Serviço para buscar todos os Distribuidores.
 \*
  * @async
  * @function getDistribuidoresService
  * @param {number} page - Paginação das buscas.
  * @param {number} limit - Quantidade de Distribuidores que será retornado.
  * @throws {AppError} Caso não seja encontrado nenhum Distribuidor.
  * @returns {Promise<iDistribuidor[]>}  Os Distribuidores encontrados e validados.
 \*
  * @example
  * // Exemplo de chamada
  * const resultado = await getDistribuidoresService(1, 15);
 \*
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

const getDistribuidoresService = async (
  page: number,
  limit: number
): Promise<iDistribuidor[]> => {
  const offset = (page - 1) * limit;

  const retrivedDistribuidores = await Distribuidor.findAll({
    offset,
    limit,
    where: { deletedAt: null },
  });

  if (!retrivedDistribuidores) {
    throw new AppError("Não existe nenhum Distribuidor registrado!", 404);
  }

  return distribuidorSchema.array().parse(retrivedDistribuidores);
};

export default getDistribuidoresService;
