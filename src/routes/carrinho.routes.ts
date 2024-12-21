import { Router } from "express";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureExistsMiddleware from "../middlewares/ensureExists.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import {
  addProdutoCarrinhoController,
  getCarrinhoIdController,
  removeProdutoCarrinhoController,
  updateCarrinhoController,
} from "../controllers/carrinho.controllers";
import Carrinho from "../models/Carrinho";
import { carrinhoUpdateSchema } from "../schemas/carrinho.schema";
import {
  carrinhoProdutoAddSchema,
  carrinhoProdutoRemoveSchema,
} from "../schemas/carrinhoProduto.schema";

const carrinhoRoutes = Router();

/**
 * Rota para obter um Carrinho pelo seu ID.
 *
 * @name GET /carrinho/:id
 * @middleware ensureExistsMiddleware - Verifica se o Carrinho existe.
 * @middleware ensureTokenIsValidMiddleware - Valida o token de autenticação.
 * @controller getCarrinhoIdController - Retorna o Carrinho solicitado.
 */
carrinhoRoutes.get(
  "/:id",
  ensureExistsMiddleware(Carrinho, "Carrinho"),
  ensureTokenIsValidMiddleware,
  getCarrinhoIdController
);

/**
 * Rota para adicionar um Produto no Carrinho.
 *
 * @name POST /carrinho
 * @middleware ensureDataIsValidMiddleware - Valida o corpo da requisição conforme o schema.
 * @middleware ensureTokenIsValidMiddleware - Valida o token de autenticação.
 * @controller addProdutoCarrinhoController - Adiciona um Produto no Carrinho.
 */
carrinhoRoutes.post(
  "/",
  ensureDataIsValidMiddleware(carrinhoProdutoAddSchema),
  ensureTokenIsValidMiddleware,
  addProdutoCarrinhoController
);

/**
 * Rota para atualizar um Carrinho pelo seu ID.
 *
 * @name PATCH /carrinho/:id
 * @middleware ensureExistsMiddleware - Verifica se o Carrinho existe.
 * @middleware ensureDataIsValidMiddleware - Valida o corpo da requisição conforme o schema.
 * @middleware ensureTokenIsValidMiddleware - Valida o token de autenticação.
 * @controller updateCarrinhoController - Atualiza o produto do Carrinho solicitado.
 */
carrinhoRoutes.patch(
  "/:id",
  ensureExistsMiddleware(Carrinho, "Carrinho"),
  ensureDataIsValidMiddleware(carrinhoUpdateSchema),
  ensureTokenIsValidMiddleware,
  updateCarrinhoController
);

/**
 * Rota para deletar um Carrinho pelo seu ID.
 *
 * @name DELETE /carrinho/
 * @middleware ensureDataIsValidMiddleware - Valida o corpo da requisição conforme o schema.
 * @middleware ensureTokenIsValidMiddleware - Valida o token de autenticação.
 * @controller removeProdutoCarrinhoController - Deleta o produto do Carrinho.
 */
carrinhoRoutes.delete(
  "/",
  ensureDataIsValidMiddleware(carrinhoProdutoRemoveSchema),
  ensureTokenIsValidMiddleware,
  removeProdutoCarrinhoController
);

export default carrinhoRoutes;
