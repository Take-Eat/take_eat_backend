import { z } from "zod";

const produtoProdutoSchema = z.object({
  id: z.number(),
  quantidade: z.number().min(1),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const produtoProdutoCreateSchema = produtoProdutoSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export { produtoProdutoSchema, produtoProdutoCreateSchema };
