import { array, z } from "zod";
import { produtoSchema } from "./produto.schema";

const carrinhoSchema = z.object({
  id: z.number(),
  idDistribuidor: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Define o schema para a associação entre Carrinho e Produto
const carrinhoProdutoSchema = z.object({
  id: z.number(),
  quantidade: z.number(),
  idCarrinho: z.number(),
  idProduto: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  produto: produtoSchema, // Associa o schema do produto
});

// Extende o schema do carrinho para incluir os produtos
const carrinhoWithProdutoSchema = carrinhoSchema.extend({
  produtos: array(carrinhoProdutoSchema), // Adiciona o schema de produtos ao carrinho
});

const carrinhoCreateSchema = carrinhoSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const carrinhoUpdateSchema = carrinhoCreateSchema.partial();

export {
  carrinhoSchema,
  carrinhoWithProdutoSchema,
  carrinhoCreateSchema,
  carrinhoUpdateSchema,
};
