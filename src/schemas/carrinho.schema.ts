import { array, z } from "zod";
import { produtoSchema } from "./produto.schema";

const carrinhoSchema = z.object({
  id: z.number(),
  idDistribuidor: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const carrinhoWithProdutoSchema = carrinhoSchema.extend({
  produtos: array(produtoSchema),
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
