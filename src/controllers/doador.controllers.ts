import { Request, Response } from "express";

import getDoadoresService from "../services/doador/getDoadores.service";
import { iDoadorUpdate } from "../interfaces/doador.interface";
import updateDoadorService from "../services/doador/updateDoador.service";
import getDoadorIdService from "../services/doador/getDoadorId.service";
import deleteDoadorService from "../services/doador/deleteDoador.service";

/**
 * Obtém um Doador pelo seu ID.
 *
 * @async
 * @function getIdDoadorController
 * @param {Request} req - Objeto de requisição do Express.
 * @param {Response} res - Objeto de resposta do Express.
 * @returns {Promise<Response>} 200 - Doador encontrado.
 * @throws {404} - Caso o doador não seja encontrado.
 *
 * @example
 * // GET /doador/1
 * // Response:
 * {
 *  id: number;
 *  razaoSocial: string;
 *  cnpj: string;
 *  endereco: string;
 *  idUsuario: number;
 *  createdAt: Date;
 *  updatedAt: Date;
 *  ramoAlimenticio: string;
 *  horarioRetirada: string;
 * }
 */
const getIdDoadorController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const id = Number(req.params.id);

  const retrivedDoador = await getDoadorIdService(id);

  return res.status(200).json(retrivedDoador);
};

/**
 * Obtém todos Doadores.
 * 
 * @async
 * @function getAllDoadorController
 * @param {Request} req - Objeto de requisição do Express.
 * @param {Response} res - Objeto de resposta do Express.
 * @returns {Promise<Response>} 200 - Doadores encontrados.
 * @throws {404} - Caso os doadores não sejam encontrados.
 * 
 * @example
 * // GET /doador/3
 * // Response:
 * {
 *  id: number;
 *  razaoSocial: string;
 *  cnpj: string;
 *  endereco: string;
 *  idUsuario: number;
 *  createdAt: Date;
 *  updatedAt: Date;
 *  ramoAlimenticio: string;
 *  horarioRetirada: string;
}[]
 */
const getAllDoadorController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { page = 1, limit = 10 } = req.query;
  const allUsers = await getDoadoresService(Number(page), Number(limit));

  return res.status(200).json(allUsers);
};

/**
 * Atualiza um doador pelo seu ID.
 *
 * @async
 * @function updateDoadorController
 * @param {Request} req - Objeto de requisição do Express contendo o payload.
 * @param {Response} res - Objeto de resposta do Express.
 * @returns {Promise<Response>} 200 - Doador atualizado com sucesso.
 * @throws {409} - Caso o dodador não seja atualizado.
 *
 * @example
 * // PATCH /doador/10
 * // Body:
 * {
 *  razaoSocial?: string;
 *  cnpj?: string;
 *  endereco?: string;
 *  idUsuario?: number;
 *  ramoAlimenticio?: string;
 *  horarioRetirada?: string;
 * }
 * // Response:
 * {
 *  id: number;
 *  razaoSocial: string;
 *  cnpj: string;
 *  endereco: string;
 *  idUsuario: number;
 *  createdAt: Date;
 *  updatedAt: Date;
 *  ramoAlimenticio: string;
 *  horarioRetirada: string;
 * }
 */
const updateDoadorController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const payload: iDoadorUpdate = req.body,
    id = Number(req.params.id);

  const updatedUser = await updateDoadorService(id, payload);

  return res.status(200).json(updatedUser);
};

/**
 * Deleta um doador pelo seu ID.
 *
 * @async
 * @function deleteDoadorController
 * @param {Request} req - Objeto de requisição do Express contendo o payload.
 * @param {Response} res - Objeto de resposta do Express.
 * @returns {Promise<Response>} 204 - doador deletado com sucesso.
 *
 * @example
 * // DELETE /doador/10
 */
const deleteDoadorController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const id = Number(req.params.id);

  await deleteDoadorService(id);

  return res.status(204).send();
};

export {
  getIdDoadorController,
  getAllDoadorController,
  updateDoadorController,
  deleteDoadorController,
};
