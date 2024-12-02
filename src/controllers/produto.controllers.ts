import { z } from "zod";
import { Request, Response } from "express";
import createUsersService from "../services/users/createUsers.service";
import deleteUsersService from "../services/users/deleteUsers.service";
import getAllUsersService from "../services/users/getAllUsers.service";
import updateUsersService from "../services/users/updateUsers.service";
import {
  iUserCommonCreate,
  iUserCreate,
  iUsersWithoutPass,
  iUserUpdate,
} from "../interfaces/user.interface";

import getUsersIdService from "../services/users/getUsersId.service";

import forgotPasswordService from "../services/users/forgotPassword.service";
import resetPasswordService from "../services/users/resetPassword.service";
import getUsersUsernameService from "../services/users/getUsersUsername.service";
import getProdutoIdService from "../services/produto/getProduto.service";
import getAllProdutosDoador from "../services/produto/getAllProdutosDoador.service";
import createProdutoService from "../services/produto/create.service";
import { iProdutoUpdate } from "../interfaces/produto.interface";
import updateProdutoService from "../services/produto/update.service";
import deleteProdutoIdService from "../services/produto/deleteProduto.service";

const getProdutoIdController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const id = Number(req.params.id);
  const retrivedProduto = await getProdutoIdService(id);

  return res.status(200).json(retrivedProduto);
};

const getAllProdutoIdController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const id = Number(req.params.id); // Id do doador
  const allProdutos = await getAllProdutosDoador(id);

  return res.status(200).json(allProdutos);
};

const createProdutoController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const payload = req.body;

  const createdProduto = await createProdutoService(payload);

  return res.status(201).json(createdProduto);
};

const updateProdutoController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const payload: iProdutoUpdate = req.body,
    id = Number(req.params.id);

  const updatedProduto = await updateProdutoService(id, payload);

  return res.status(200).json(updatedProduto);
};

const deleteProdutoController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const id = Number(req.params.id);

  await deleteProdutoIdService(id);

  return res.status(204).send();
};

export {
  getProdutoIdController,
  getAllProdutoIdController,
  createProdutoController,
  updateProdutoController,
  deleteProdutoController,
};
