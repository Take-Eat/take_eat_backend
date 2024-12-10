import { Request, Response } from "express";
import getEntregadorIdService from "../services/entregador/getEntregadorId.service";
import getEntregadoresService from "../services/entregador/getEntregadores.service";
import { iEntregadorUpdate } from "../interfaces/entregador.interface";
import updateEntregadorService from "../services/entregador/updateEntregador.service";
import deleteEntregadorService from "../services/entregador/deleteEntregador.service";

/**
 * Obtém um Entregador pelo seu ID.
 *
 * @async
 * @function getIdEntregadorController
 * @param {Request} req - Objeto de requisição do Express.
 * @param {Response} res - Objeto de resposta do Express.
 * @returns {Promise<Response>} 200 - Entregador encontrado.
 * @throws {404} - Caso o Entregador não seja encontrado.
 *
 * @example
 * // GET /entregador/1
 * // Response:
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
const getIdEntregadorController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const id = Number(req.params.id);

  const retrivedEntregador = await getEntregadorIdService(id);

  return res.status(200).json(retrivedEntregador);
};

/**
 * Obtém todos Entregadores.
 * 
 * @async
 * @function getAllEntregadorController
 * @param {Request} req - Objeto de requisição do Express.
 * @param {Response} res - Objeto de resposta do Express.
 * @returns {Promise<Response>} 200 - Entregadores encontrados.
 * @throws {404} - Caso os Entregadores não sejam encontrados.
 * 
 * @example
 * // GET /entregador/3
 * // Response:
 * {
    id: number;
    endereco: string;
    idUsuario: number;
    createdAt: Date;
    updatedAt: Date;
    nome: string;
    cpf: string;
    cnh: string;
}[]
 */
const getAllEntregadorController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { page = 1, limit = 10 } = req.query;
  const allEntregador = await getEntregadoresService(
    Number(page),
    Number(limit)
  );

  return res.status(200).json(allEntregador);
};

/**
 * Atualiza um Entregador pelo seu ID.
 *
 * @async
 * @function updateEntregadorController
 * @param {Request} req - Objeto de requisição do Express contendo o payload.
 * @param {Response} res - Objeto de resposta do Express.
 * @returns {Promise<Response>} 200 - Entregador atualizado com sucesso.
 * @throws {409} - Caso o Entregador não seja atualizado.
 *
 * @example
 * // PATCH /entregador/10
 * // Body:
 * {
    endereco?: string;
    idUsuario?: number;
    nome?: string;
    cpf?: string;
    cnh?: string;
 * }
 * // Response:
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
const updateEntregadorController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const payload: iEntregadorUpdate = req.body,
    id = Number(req.params.id);

  const updatedEntregador = await updateEntregadorService(id, payload);

  return res.status(200).json(updatedEntregador);
};

/**
 * Deleta um Entregador pelo seu ID.
 *
 * @async
 * @function deleteEntregadorController
 * @param {Request} req - Objeto de requisição do Express contendo o payload.
 * @param {Response} res - Objeto de resposta do Express.
 * @returns {Promise<Response>} 204 - Entregador deletado com sucesso.
 *
 * @example
 * // DELETE /entregador/10
 */
const deleteEntregadorController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const id = Number(req.params.id);

  await deleteEntregadorService(id);

  return res.status(204).send();
};

export {
  getIdEntregadorController,
  getAllEntregadorController,
  updateEntregadorController,
  deleteEntregadorController,
};
