import { AppError } from "../../errors";
import {
  iCarteira,
  iCarteiraCreate,
} from "../../interfaces/carteira.interface";
import Carteira from "../../models/Carteira";
import { carteiraSchema } from "../../schemas/carteira.schema";

/**
 * Serviço para criar um novo Carteira.
 *
 * @async
 * @function createCarteiraService
 * @param {iCarteiraCreate} payload - Os dados necessários para criar a Carteira.
 * @throws {AppError} Caso a criação da Carteira falhe.
 * @returns {Promise<iCarteira>} A Carteira criada e validada.
 *
 * @example
 * // Exemplo de payload
 * const payload = {
 *  totalDoado: 100.50,
 *  saldoEatCoin: 1,
 *  totalEatCoin: 250.20;
 *  idApoiador: 1;
 * };
 *
 * const novaCarteira = await createCarteiraService(payload);
 *
 * // Exemplo de resposta
    id: number;
    saldoEatCoin: number;
    totalEatCoin: number;
    totalDoado: number;
    idApoiador: number;
    createdAt: Date;
    updatedAt: Date;
 */
const createCarteiraService = async (
  payload: iCarteiraCreate
): Promise<iCarteira> => {
  // Criação do Carteira no banco de dados
  const createdCarteira = await Carteira.create(payload);
  console.log(createdCarteira);

  // Lançar erro caso a criação falhe
  if (!createdCarteira) {
    throw new AppError("Não foi possível criar a carteira", 409);
  }

  // Validar o Carteira criada com o schema
  const parsedCarteira = carteiraSchema.parse(createdCarteira);
  return parsedCarteira;
};

export default createCarteiraService;
