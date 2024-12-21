import { Request, Response } from "express";
import getCarrinhoIdService from "../services/carrinho/getCarrinhoProduto.service";
import createCarrinhoService from "../services/carrinho/create.service";
import { iCarrinhoUpdate } from "../interfaces/carrinho.interface";
import updateCarrinhoService from "../services/carrinho/update.service";

/**
 * Obtém um Carrinho pelo seu ID.
 *
 * @async
 * @function getCarrinhoIdController
 * @param {Request} req - Objeto de requisição do Express.
 * @param {Response} res - Objeto de resposta do Express.
 * @returns {Promise<Response>} 200 - Carrinho encontrado.
 * @throws {404} - Caso o Carrinho não seja encontrado.
 *
 * @example
 * // GET /Carrinho/1
 * // Response:
 * {
 *   "id": 1,
 *   "totalDoado": 100.50,
 *   "idApoiador": 2,
 *   "createdAt": "2023-12-01T10:00:00.000Z",
 *   "updatedAt": "2023-12-02T10:00:00.000Z"
 * }
 */
const getCarrinhoIdController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const id = Number(req.params.id);
  const retrivedCarrinho = await getCarrinhoIdService(id);

  return res.status(200).json(retrivedCarrinho);
};

/**
 * Cria um novo Carrinho para um apoiador.
 *
 * @async
 * @function createCarrinhoController
 * @param {Request} req - Objeto de requisição do Express contendo o payload.
 * @param {Response} res - Objeto de resposta do Express.
 * @returns {Promise<Response>} 201 - Carrinho criado com sucesso.
 * @throws {409} - Caso o Carrinho não seja criado.
 *
 *
 * @example
 * // POST /Carrinho
 * // Body:
 * {
 *   "totalDoado": 150.00,
 *   "idApoiador": 3
 * }
 * // Response:
 * {
 *   "id": 10,
 *   "totalDoado": 150.00,
 *   "idApoiador": 3,
 *   "createdAt": "2023-12-01T12:00:00.000Z",
 *   "updatedAt": "2023-12-01T12:00:00.000Z"
 * }
 */
const createCarrinhoController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const payload = req.body;

  const createdCarrinho = await createCarrinhoService(payload);

  return res.status(201).json(createdCarrinho);
};

/**
 * Atualiza um Carrinho pelo seu ID.
 *
 * @async
 * @function updateCarrinhoController
 * @param {Request} req - Objeto de requisição do Express contendo o payload.
 * @param {Response} res - Objeto de resposta do Express.
 * @returns {Promise<Response>} 200 - Carrinho atualizado com sucesso.
 * @throws {409} - Caso o Carrinho não seja atualizado.
 *
 * @example
 * // PATCH /Carrinho/10
 * // Body:
 * {
 *   "id": 10,
 *   "totalDoado": 155.00
 * }
 * // Response:
 * {
 *   "id": 10,
 *   "totalDoado": 155.00,
 *   "idApoiador": 3,
 *   "createdAt": "2023-12-01T12:00:00.000Z",
 *   "updatedAt": "2023-12-01T12:00:00.000Z"
 * }
 */

const updateCarrinhoController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const payload: iCarrinhoUpdate = req.body,
    id = Number(req.params.id);

  const updatedCarrinho = await updateCarrinhoService(id, payload);

  return res.status(200).json(updatedCarrinho);
};

export {
  getCarrinhoIdController,
  createCarrinhoController,
  updateCarrinhoController,
};
