import { Router } from "express";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureExistsMiddleware from "../middlewares/ensureExists.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import {
  createProdutoController,
  deleteProdutoController,
  getAllProdutoIdController,
  getProdutoIdController,
  updateProdutoController,
} from "../controllers/produto.controllers";
import Produto from "../models/Produto";
import {
  produtoCreateSchema,
  produtoUpdateSchema,
} from "../schemas/produto.schema";

const produtoRoutes = Router();

produtoRoutes.get(
  "/all/:id",
  ensureTokenIsValidMiddleware,
  getAllProdutoIdController
); // Pegar todos produto de um doador

produtoRoutes.get(
  "/:id",
  ensureExistsMiddleware(Produto, "Produto"),
  ensureTokenIsValidMiddleware,
  getProdutoIdController
); // buscar um produto por id

produtoRoutes.post(
  "/",
  ensureDataIsValidMiddleware(produtoCreateSchema),
  ensureTokenIsValidMiddleware,
  createProdutoController
); // criar um produto

produtoRoutes.patch(
  "/:id",
  ensureExistsMiddleware(Produto, "Produto"),
  ensureDataIsValidMiddleware(produtoUpdateSchema),
  ensureTokenIsValidMiddleware,
  updateProdutoController
); // Update em Produto

produtoRoutes.delete(
  "/:id",
  ensureExistsMiddleware(Produto, "Produto"),
  ensureTokenIsValidMiddleware,
  deleteProdutoController
); // Deletar Produto

export default produtoRoutes;
