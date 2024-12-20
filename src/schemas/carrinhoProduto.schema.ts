import { z } from "zod";

const carrinhoProdutoSchema = z.object({
  id: z.number(),
  quantidade: z.number().min(1, "Quantidade deve ser pelo menos 1"), // Validação da quantidade
  createdAt: z.date(),
  updatedAt: z.date(),
});

const carrinhoProdutoCreateSchema = carrinhoProdutoSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export { carrinhoProdutoSchema, carrinhoProdutoCreateSchema };
