import { Request, Response } from "express";
import getDistribuidorIdService from "../services/distribuidor/getDistribuidorId.service";
import getDistribuidoresService from "../services/distribuidor/getDistribuidores.service";
import { iDistribuidorUpdate } from "../interfaces/distribuidor.interface";
import updateDistribuidorService from "../services/distribuidor/updateDistribuidor.service";
import deleteDistribuidorService from "../services/distribuidor/deleteDistribuidor.service";

/**
 * Obtém um Distribuidor pelo seu ID.
 *
 * @async
 * @function getIdDistribuidorController
 * @param {Request} req - Objeto de requisição do Express.
 * @param {Response} res - Objeto de resposta do Express.
 * @returns {Promise<Response>} 200 - Distribuidor encontrado.
 * @throws {404} - Caso o Distribuidor não seja encontrado.
 *
 * @example
 * // GET /distribuidor/1
 * // Response:
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
const getIdDistribuidorController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const id = Number(req.params.id);

  const retrivedDistribuidor = await getDistribuidorIdService(id);

  return res.status(200).json(retrivedDistribuidor);
};

/**
 * Obtém todos Distribuidores.
 * 
 * @async
 * @function getAllDistribuidorController
 * @param {Request} req - Objeto de requisição do Express.
 * @param {Response} res - Objeto de resposta do Express.
 * @returns {Promise<Response>} 200 - Distribuidores encontrados.
 * @throws {404} - Caso os Distribuidores não sejam encontrados.
 * 
 * @example
 * // GET /distribuidor/3
 * // Response:
 * {
    id: number;
    razaoSocial: string;
    cnpj: string;
    endereco: string;
    idUsuario: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}[]
 */
const getAllDistribuidorController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { page = 1, limit = 10 } = req.query;
  const allDistribuidor = await getDistribuidoresService(
    Number(page),
    Number(limit)
  );

  return res.status(200).json(allDistribuidor);
};

/**
 * Atualiza um Distribuidor pelo seu ID.
 *
 * @async
 * @function updateDistribuidorController
 * @param {Request} req - Objeto de requisição do Express contendo o payload.
 * @param {Response} res - Objeto de resposta do Express.
 * @returns {Promise<Response>} 200 - Distribuidor atualizado com sucesso.
 * @throws {409} - Caso o Distribuidor não seja atualizado.
 *
 * @example
 * // PATCH /distribuidor/10
 * // Body:
 * {
    razaoSocial?: string;
    cnpj?: string;
    endereco?: string;
    idUsuario?: number;
    deletedAt?: Date | null;
 * }
 * // Response:
 * {
    id: number;
    razaoSocial: string;
    cnpj: string;
    endereco: string;
    idUsuario: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null
 * }
 */
const updateDistribuidorController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const payload: iDistribuidorUpdate = req.body,
    id = Number(req.params.id);

  const updatedDistribuidor = await updateDistribuidorService(id, payload);

  return res.status(200).json(updatedDistribuidor);
};

/**
 * Deleta um Distribuidor pelo seu ID.
 *
 * @async
 * @function deleteDistribuidorController
 * @param {Request} req - Objeto de requisição do Express contendo o payload.
 * @param {Response} res - Objeto de resposta do Express.
 * @returns {Promise<Response>} 204 - Distribuidor deletado com sucesso.
 *
 * @example
 * // DELETE /distribuidor/10
 */
const deleteDistribuidorController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const id = Number(req.params.id);

  await deleteDistribuidorService(id);

  return res.status(204).send();
};

export {
  getIdDistribuidorController,
  getAllDistribuidorController,
  updateDistribuidorController,
  deleteDistribuidorController,
};
