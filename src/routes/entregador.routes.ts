import { Router } from "express";

import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureExistsMiddleware from "../middlewares/ensureExists.middleware";
import User from "../models/User";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import { entregadorUpdateSchema } from "../schemas/entregador.schema";
import {
  deleteEntregadorController,
  getAllEntregadorController,
  getIdEntregadorController,
  updateEntregadorController,
} from "../controllers/entregador.controllers";
import Entregador from "../models/Entregador";

const entregadorRoutes = Router();

/**
 * Rota para obter todos os Entregadores.
 *
 * @name GET /entregador/all/:id
 * @middleware ensureTokenIsValidMiddleware - Valida o token de autenticação.
 * @controller getAllEntregadorController - Retorna os Entregadores.
 */
entregadorRoutes.get(
  "",
  ensureTokenIsValidMiddleware,
  getAllEntregadorController
);

/**
 * Rota para obter um Entregador pelo seu ID.
 *
 * @name GET /entregador/:id
 * @middleware ensureExistsMiddleware - Verifica se o Entregador existe.
 * @middleware ensureTokenIsValidMiddleware - Valida o token de autenticação.
 * @controller getIdEntregadorController - Retorna o Entregador solicitado.
 */
entregadorRoutes.get(
  "/:id",
  ensureExistsMiddleware(Entregador, "Entregador"),
  ensureTokenIsValidMiddleware,
  getIdEntregadorController
);

/**
 * Rota para atualizar um Entregador pelo seu ID.
 *
 * @name PATCH /entregador/:id
 * @middleware ensureExistsMiddleware - Verifica se o Entregador existe.
 * @middleware ensureDataIsValidMiddleware - Valida o corpo da requisição conforme o schema.
 * @middleware ensureTokenIsValidMiddleware - Valida o token de autenticação.
 * @controller updateEntregadorController - Atualiza o Entregador solicitado.
 */
entregadorRoutes.patch(
  "/:id",
  ensureExistsMiddleware(Entregador, "Entregador"),
  ensureDataIsValidMiddleware(entregadorUpdateSchema),
  ensureTokenIsValidMiddleware,
  updateEntregadorController
);

/**
 * Rota para deletar um Entregador pelo seu ID.
 *
 * @name DELETE /entregador/:id
 * @middleware ensureExistsMiddleware - Verifica se o Entregador existe.
 * @middleware ensureTokenIsValidMiddleware - Valida o token de autenticação.
 * @controller deleteEntregadorController - Deleta o Entregador solicitado.
 */
entregadorRoutes.delete(
  "/:id",
  ensureExistsMiddleware(Entregador, "Entregador"), // a validação fica com a tabela de usuario, porque o id que vem do parametro é o do usuário
  deleteEntregadorController
);

export default entregadorRoutes;
