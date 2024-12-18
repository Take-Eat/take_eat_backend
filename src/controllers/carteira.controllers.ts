import { Request, Response } from "express";
import getCarteiraIdService from "../services/carteira/getCarteira.service";

/**
 * Obtém uma Carteira pelo seu ID.
 *
 * @async
 * @function getCarteiraIdController
 * @param {Request} req - Objeto de requisição do Express.
 * @param {Response} res - Objeto de resposta do Express.
 * @returns {Promise<Response>} 200 - Carteira encontrada.
 * @throws {404} - Caso a Carteira não seja encontrada.
 *
 * @example
 * // GET /carteira/1
 * // Response:
 * {
 *  id: number;
 *  saldoEatCoin: number;
 *  totalEatCoin: number;
 *  totalDoado: number;
 *  idApoiador: number;
 *  createdAt: Date;
 *  updatedAt: Date;
 * }
 */
const getCarteiraIdController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const id = Number(req.params.id);
  const retrivedCarteira = await getCarteiraIdService(id);

  return res.status(200).json(retrivedCarteira);
};

export { getCarteiraIdController };
