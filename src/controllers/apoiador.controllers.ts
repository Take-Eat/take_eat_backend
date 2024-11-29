import { Request, Response } from "express";

import getApoiadorIdService from "../services/apoiador/getApoiadorId.service";
import getApoiadoresService from "../services/apoiador/getApoiadores.service";
import { iApoiadorUpdate } from "../interfaces/apoiador.interface";
import updateApoiadorService from "../services/apoiador/updateApoiador.service";
import deleteApoiadorService from "../services/apoiador/deleteApoiador.service";

const getApoiadorIdController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const id = Number(req.params.id);
  const retrivedApoiador = await getApoiadorIdService(id);

  return res.status(200).json(retrivedApoiador);
};

const getAllApoiadorController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { page = 1, limit = 10 } = req.query;
  const allUsers = await getApoiadoresService(Number(page), Number(limit));

  return res.status(200).json(allUsers);
};

const updateApoiadorController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const payload: iApoiadorUpdate = req.body,
    id = Number(req.params.id);

  const updatedUser = await updateApoiadorService(id, payload);

  return res.status(200).json(updatedUser);
};

const deleteApoiadorController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const id = Number(req.params.id);

  await deleteApoiadorService(id);

  return res.status(204).send();
};

export {
  getApoiadorIdController,
  getAllApoiadorController,
  updateApoiadorController,
  deleteApoiadorController,
};
