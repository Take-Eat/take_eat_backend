import { Router } from "express";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureExistsMiddleware from "../middlewares/ensureExists.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import {
  createExtratoController,
  deleteExtratoController,
  getAllExtratoIdController,
  getExtratoIdController,
  updateExtratoController,
} from "../controllers/extrato.controllers";
import Extrato from "../models/Extrato";
import {
  extratoCreateSchema,
  extratoUpdateSchema,
} from "../schemas/extrato.schema";

const extratoRoutes = Router();

/**
 * Rota para obter todos os extratos de um apoiador pelo seu ID.
 *
 * @name GET /extrato/all/:id
 * @middleware ensureTokenIsValidMiddleware - Valida o token de autenticação.
 * @controller getAllExtratoIdController - Retorna os extratos do apoiador.
 */
extratoRoutes.get(
  "/all/:id",
  ensureTokenIsValidMiddleware,
  getAllExtratoIdController
);

/**
 * Rota para obter um extrato pelo seu ID.
 *
 * @name GET /extrato/:id
 * @middleware ensureExistsMiddleware - Verifica se o extrato existe.
 * @middleware ensureTokenIsValidMiddleware - Valida o token de autenticação.
 * @controller getExtratoIdController - Retorna o extrato solicitado.
 */
extratoRoutes.get(
  "/:id",
  ensureExistsMiddleware(Extrato, "Extrato"),
  ensureTokenIsValidMiddleware,
  getExtratoIdController
);

/**
 * Rota para criar um novo extrato.
 *
 * @name POST /extrato
 * @middleware ensureDataIsValidMiddleware - Valida o corpo da requisição conforme o schema.
 * @middleware ensureTokenIsValidMiddleware - Valida o token de autenticação.
 * @controller createExtratoController - Cria um novo extrato.
 */
extratoRoutes.post(
  "/",
  ensureDataIsValidMiddleware(extratoCreateSchema),
  ensureTokenIsValidMiddleware,
  createExtratoController
);

/**
 * Rota para atualizar um extrato pelo seu ID.
 *
 * @name PATCH /extrato/:id
 * @middleware ensureExistsMiddleware - Verifica se o extrato existe.
 * @middleware ensureDataIsValidMiddleware - Valida o corpo da requisição conforme o schema.
 * @middleware ensureTokenIsValidMiddleware - Valida o token de autenticação.
 * @controller updateExtratoController - Atualiza o extrato solicitado.
 */
extratoRoutes.patch(
  "/:id",
  ensureExistsMiddleware(Extrato, "Extrato"),
  ensureDataIsValidMiddleware(extratoUpdateSchema),
  ensureTokenIsValidMiddleware,
  updateExtratoController
);

/**
 * Rota para deletar um extrato pelo seu ID.
 *
 * @name DELETE /extrato/:id
 * @middleware ensureExistsMiddleware - Verifica se o extrato existe.
 * @middleware ensureTokenIsValidMiddleware - Valida o token de autenticação.
 * @controller deleteExtratoController - Deleta o extrato solicitado.
 */
extratoRoutes.delete(
  "/:id",
  ensureExistsMiddleware(Extrato, "Extrato"),
  ensureTokenIsValidMiddleware,
  deleteExtratoController
);

export default extratoRoutes;
