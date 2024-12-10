import { Router } from "express";

import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureExistsMiddleware from "../middlewares/ensureExists.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import { distribuidorUpdateSchema } from "../schemas/distribuidor.schema";
import {
  deleteDistribuidorController,
  getAllDistribuidorController,
  getIdDistribuidorController,
  updateDistribuidorController,
} from "../controllers/distribuidor.controllers";
import Distribuidor from "../models/Distribuidor";

const distribuidorRoutes = Router();

/**
 * Rota para obter todos os Distribuidores.
 *
 * @name GET /distribuidor/all/:id
 * @middleware ensureTokenIsValidMiddleware - Valida o token de autenticação.
 * @controller getAllDistribuidorController - Retorna os Distribuidores.
 */
distribuidorRoutes.get(
  "",
  ensureTokenIsValidMiddleware,
  getAllDistribuidorController
);

/**
 * Rota para obter um Distribuidor pelo seu ID.
 *
 * @name GET /distribuidor/:id
 * @middleware ensureExistsMiddleware - Verifica se o Distribuidor existe.
 * @middleware ensureTokenIsValidMiddleware - Valida o token de autenticação.
 * @controller getIdDistribuidorController - Retorna o Distribuidor solicitado.
 */
distribuidorRoutes.get(
  "/:id",
  ensureExistsMiddleware(Distribuidor, "Distribuidor"),
  ensureTokenIsValidMiddleware,
  getIdDistribuidorController
);

/**
 * Rota para atualizar um Distribuidor pelo seu ID.
 *
 * @name PATCH /distribuidor/:id
 * @middleware ensureExistsMiddleware - Verifica se o Distribuidor existe.
 * @middleware ensureDataIsValidMiddleware - Valida o corpo da requisição conforme o schema.
 * @middleware ensureTokenIsValidMiddleware - Valida o token de autenticação.
 * @controller updateDistribuidorController - Atualiza o Distribuidor solicitado.
 */
distribuidorRoutes.patch(
  "/:id",
  ensureExistsMiddleware(Distribuidor, "Distribuidor"),
  ensureDataIsValidMiddleware(distribuidorUpdateSchema),
  ensureTokenIsValidMiddleware,
  updateDistribuidorController
);

/**
 * Rota para deletar um Distribuidor pelo seu ID.
 *
 * @name DELETE /distribuidor/:id
 * @middleware ensureExistsMiddleware - Verifica se o Distribuidor existe.
 * @middleware ensureTokenIsValidMiddleware - Valida o token de autenticação.
 * @controller deleteDistribuidorController - Deleta o Distribuidor solicitado.
 */
distribuidorRoutes.delete(
  "/:id",
  ensureExistsMiddleware(Distribuidor, "Distribuidor"),
  deleteDistribuidorController
);

export default distribuidorRoutes;
