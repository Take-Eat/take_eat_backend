import { AppError } from "../../errors";
import { iCarteira } from "../../interfaces/carteira.interface";
import Carteira from "../../models/Carteira";
import { carteiraSchema } from "../../schemas/carteira.schema";

/**
  * Serviço para buscar uma Carteira pelo seu ID do APOIADOR.
 \*
  * @async
  * @function getCarteiraIdApoiadorService
  * @param {number} idApoiador - Identificação da Carteira para retornar seus dados.
  * @throws {AppError} Caso não seja encontrada a Carteira.
  * @returns {Promise<iCarteira>} A Carteira encontrada e validada.
 \*
  * @example
  * // Exemplo de chamada
  * const retrivedCarteira = await getCarteiraIdApoiadorService(2);
  * // Exemplo de retorno
 * {
 *   id: 2,
 *   totalDoado: 200.50,
 *   idApoiador: 1,
 *   createdAt: "2024-12-01T12:00:00.000Z",
 *   updatedAt: "2024-12-01T12:00:00.000Z",
 * }
 */

const getCarteiraIdApoiadorService = async (
  idApoiador: number
): Promise<iCarteira> => {
  const retrivedCarteira = await Carteira.findOne({
    where: { idApoiador },
  });

  if (!retrivedCarteira) {
    throw new AppError("Não foi possível encontrar a Carteira!", 404);
  }

  return carteiraSchema.parse(retrivedCarteira);
};

export default getCarteiraIdApoiadorService;
