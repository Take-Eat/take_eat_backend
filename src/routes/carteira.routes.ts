import { Router } from "express";
import ensureExistsMiddleware from "../middlewares/ensureExists.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import { getCarteiraIdController } from "../controllers/carteira.controllers";
import Carteira from "../models/Carteira";

const CarteiraRoutes = Router();

/**
 * Rota para obter uma Carteira pelo seu ID.
 *
 * @name GET /carteira/:id
 * @middleware ensureExistsMiddleware - Verifica se a Carteira existe.
 * @middleware ensureTokenIsValidMiddleware - Valida o token de autenticação.
 * @controller getCarteiraIdController - Retorna a Carteira solicitada.
 */
CarteiraRoutes.get(
  "/:id",
  ensureExistsMiddleware(Carteira, "Carteira"),
  ensureTokenIsValidMiddleware,
  getCarteiraIdController
);

export default CarteiraRoutes;
