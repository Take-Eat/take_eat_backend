import { Request, Response } from "express";
import getCarrinhoIdService from "../services/carrinho/getCarrinhoProduto.service";
import createCarrinhoService from "../services/carrinho/create.service";
import { iCarrinhoUpdate } from "../interfaces/carrinho.interface";
import updateCarrinhoService from "../services/carrinho/update.service";
import {
  iCarrinhoProdutoAdd,
  iCarrinhoProdutoUpdate,
} from "../interfaces/carrinhoProduto.interface";
import AddProdutoCarrinhoIdService from "../services/carrinho/addProdutoCarrinho.service";

/**
 * Obtém um Carrinho pelo seu ID.
 *
 * @async
 * @function getCarrinhoIdController
 * @param {Request} req - Objeto de requisição do Express.
 * @param {Response} res - Objeto de resposta do Express.
 * @returns {Promise<Response>} 200 - Carrinho encontrado.
 * @throws {404} - Caso o Carrinho não seja encontrado com sua lista de produtos.
 *
 * @example
 * // GET /carrinho/1
 * // Response:
 * {
 *  id: number;
 *  idDistribuidor: number;
 *  createdAt: Date;
 *  updatedAt: Date;
 *  produtos: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        tipo: string;
        quantidade: number;
        tempoDisponivel: string;
        idDoador: number;
    }[];
 * }
 */
const getCarrinhoIdController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const id = Number(req.params.id);
  const retrivedCarrinho = await getCarrinhoIdService(id);

  return res.status(200).json(retrivedCarrinho);
};

/**
 * Adiciona um produto no Carrinho.
 *
 * @async
 * @function addProdutoCarrinhoController
 * @param {Request} req - Objeto de requisição do Express contendo o payload.
 * @param {Response} res - Objeto de resposta do Express.
 * @returns {Promise<Response>} 201 - Produto adicionado no carrinho com sucesso.
 * @throws {409} - Caso o produto não seja adicionado no carrinho.
 *
 *
 * @example
 * // POST /carrinho
 * // Body:
 * {
 *  quantidade: number;
 *  idCarrinho: number;
 *  idProduto: number;
 * }
 * // Response:
 * {
 *  id: number;
 *  idDistribuidor: number;
 *  createdAt: Date;
 *  updatedAt: Date;
 *  produtos: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        tipo: string;
        quantidade: number;
        tempoDisponivel: string;
        idDoador: number;
    }[];
 * }
 */
const addProdutoCarrinhoController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const payload: iCarrinhoProdutoAdd = req.body;

  const produtoAddCarrinho = await AddProdutoCarrinhoIdService(payload);

  return res.status(201).json(produtoAddCarrinho);
};

/**
 * Atualiza um Carrinho pelo seu ID. Esse controller será utilizado para vazer o controle de quantidade do produto que está no carrinho.
 *
 * @async
 * @function updateCarrinhoController
 * @param {Request} req - Objeto de requisição do Express contendo o payload.
 * @param {Response} res - Objeto de resposta do Express.
 * @returns {Promise<Response>} 200 - Carrinho atualizado com sucesso.
 * @throws {409} - Caso o Carrinho não seja atualizado.
 *
 * @example
 * // PATCH /carrinho/10
 * // Body:
 * {
  quantidade?: number;
 * }
 * // Response:
 * {
 *   "id": 10,
 *   "totalDoado": 155.00,
 *   "idApoiador": 3,
 *   "createdAt": "2023-12-01T12:00:00.000Z",
 *   "updatedAt": "2023-12-01T12:00:00.000Z"
 * }
 */

const updateCarrinhoController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const payload: iCarrinhoProdutoUpdate = req.body,
    id = Number(req.params.id);

  const updatedCarrinho = await updateCarrinhoService(id, payload);

  return res.status(200).json(updatedCarrinho);
};

export {
  getCarrinhoIdController,
  addProdutoCarrinhoController,
  updateCarrinhoController,
};
