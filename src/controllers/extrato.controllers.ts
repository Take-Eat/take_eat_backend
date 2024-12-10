import { Request, Response } from "express";
import getExtratoIdService from "../services/extrato/getExtrato.service";
import getAllExtrato from "../services/extrato/getAllExtratos.service";
import createExtratoService from "../services/extrato/create.service";
import { iExtratoUpdate } from "../interfaces/extrato.interface";
import updateExtratoService from "../services/extrato/update.service";
import deleteExtratoIdService from "../services/extrato/deleteExtrato.service";

/**
 * Obtém um extrato pelo seu ID.
 *
 * @async
 * @function getExtratoIdController
 * @param {Request} req - Objeto de requisição do Express.
 * @param {Response} res - Objeto de resposta do Express.
 * @returns {Promise<Response>} 200 - Extrato encontrado.
 * @throws {404} - Caso o extrato não seja encontrado.
 *
 * @example
 * // GET /extrato/1
 * // Response:
 * {
 *   "id": 1,
 *   "totalDoado": 100.50,
 *   "idApoiador": 2,
 *   "createdAt": "2023-12-01T10:00:00.000Z",
 *   "updatedAt": "2023-12-02T10:00:00.000Z"
 * }
 */
const getExtratoIdController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const id = Number(req.params.id);
  const retrivedExtrato = await getExtratoIdService(id);

  return res.status(200).json(retrivedExtrato);
};

/**
 * Obtém todos extratos pelo ID do APOIADOR.
 * 
 * @async
 * @function getAllExtratoIdController
 * @param {Request} req - Objeto de requisição do Express.
 * @param {Response} res - Objeto de resposta do Express.
 * @returns {Promise<Response>} 200 - Extratos encontrados.
 * @throws {404} - Caso os extratos não sejam encontrados.
 * 
 * @example
 * // GET /extrato/3
 * // Response:
 * {
    id: number;
    totalDoado: number;
    idApoiador: number;
    createdAt: Date;
    updatedAt: Date;
}[]
 */

const getAllExtratoIdController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const id = Number(req.params.id); // Id do apoiador
  const allExtratos = await getAllExtrato(id);

  return res.status(200).json(allExtratos);
};

/**
 * Cria um novo extrato para um apoiador.
 *
 * @async
 * @function createExtratoController
 * @param {Request} req - Objeto de requisição do Express contendo o payload.
 * @param {Response} res - Objeto de resposta do Express.
 * @returns {Promise<Response>} 201 - Extrato criado com sucesso.
 * @throws {409} - Caso o extrato não seja criado.
 *
 *
 * @example
 * // POST /extrato
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
const createExtratoController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const payload = req.body;

  const createdExtrato = await createExtratoService(payload);

  return res.status(201).json(createdExtrato);
};

/**
 * Atualiza um extrato pelo seu ID.
 *
 * @async
 * @function updateExtratoController
 * @param {Request} req - Objeto de requisição do Express contendo o payload.
 * @param {Response} res - Objeto de resposta do Express.
 * @returns {Promise<Response>} 200 - Extrato atualizado com sucesso.
 * @throws {409} - Caso o extrato não seja atualizado.
 *
 * @example
 * // PATCH /extrato/10
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

const updateExtratoController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const payload: iExtratoUpdate = req.body,
    id = Number(req.params.id);

  const updatedExtrato = await updateExtratoService(id, payload);

  return res.status(200).json(updatedExtrato);
};

/**
 * Deleta um extrato pelo seu ID.
 *
 * @async
 * @function deleteExtratoController
 * @param {Request} req - Objeto de requisição do Express contendo o payload.
 * @param {Response} res - Objeto de resposta do Express.
 * @returns {Promise<Response>} 204 - Extrato deletado com sucesso.
 *
 * @example
 * // DELETE /extrato/10
 */

const deleteExtratoController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const id = Number(req.params.id);

  await deleteExtratoIdService(id);

  return res.status(204).send();
};

export {
  getExtratoIdController,
  getAllExtratoIdController,
  createExtratoController,
  updateExtratoController,
  deleteExtratoController,
};
