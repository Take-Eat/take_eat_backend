import { Router } from "express";

import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureExistsMiddleware from "../middlewares/ensureExists.middleware";
import User from "../models/User";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import { doadorUpdateSchema } from "../schemas/doador.schema";
import {
  deleteDoadorController,
  getAllDoadorController,
  getIdDoadorController,
  updateDoadorController,
} from "../controllers/doador.controllers";
import Doador from "../models/Doador";

const doadorRoutes = Router();

/**
 * Rota para obter todos os doadores.
 *
 * @name GET /doador/all/:id
 * @middleware ensureTokenIsValidMiddleware - Valida o token de autenticação.
 * @controller getAllDoadorController - Retorna os doadores.
 */
doadorRoutes.get("", getAllDoadorController, ensureTokenIsValidMiddleware);

/**
 * Rota para obter um doador pelo seu ID.
 *
 * @name GET /doador/:id
 * @middleware ensureExistsMiddleware - Verifica se o doador existe.
 * @middleware ensureTokenIsValidMiddleware - Valida o token de autenticação.
 * @controller getIdDoadorController - Retorna o doador solicitado.
 */
doadorRoutes.get(
  "/:id",
  ensureExistsMiddleware(Doador, "Doador"),
  ensureTokenIsValidMiddleware,
  getIdDoadorController
);

/**
 * Rota para atualizar um doador pelo seu ID.
 *
 * @name PATCH /doador/:id
 * @middleware ensureExistsMiddleware - Verifica se o doador existe.
 * @middleware ensureDataIsValidMiddleware - Valida o corpo da requisição conforme o schema.
 * @middleware ensureTokenIsValidMiddleware - Valida o token de autenticação.
 * @controller updateDoadorController - Atualiza o doador solicitado.
 */
doadorRoutes.patch(
  "/:id",
  ensureExistsMiddleware(Doador, "Doador"),
  ensureDataIsValidMiddleware(doadorUpdateSchema),
  ensureTokenIsValidMiddleware,
  updateDoadorController
);

/**
 * Rota para deletar um doador pelo seu ID.
 *
 * @name DELETE /doador/:id
 * @middleware ensureExistsMiddleware - Verifica se o doador existe.
 * @middleware ensureTokenIsValidMiddleware - Valida o token de autenticação.
 * @controller deleteDoadorController - Deleta o doador solicitado.
 */
doadorRoutes.delete(
  "/:id",
  ensureExistsMiddleware(Doador, "Doador"), // a validação fica com a tabela de usuario, porque o id que vem do parametro é o do usuário
  deleteDoadorController
);

export default doadorRoutes;
