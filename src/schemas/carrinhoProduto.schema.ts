import { consumers } from "nodemailer/lib/xoauth2";
import { number, z } from "zod";

const carrinhoProdutoSchema = z.object({
  id: z.number(),
  quantidade: z.number().min(1, "Quantidade deve ser pelo menos 1"), // Validação da quantidade
  createdAt: z.date(),
  updatedAt: z.date(),
  idCarrinho: z.number(),
  idProduto: z.number(),
});

const carrinhoProdutoCreateSchema = carrinhoProdutoSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  // idCarrinho: true,
  // idProduto: true,
});

const carrinhoProdutoAddSchema = carrinhoProdutoSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const carrinhoProdutoRemoveSchema = carrinhoProdutoSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  quantidade: true,
});

export {
  carrinhoProdutoSchema,
  carrinhoProdutoCreateSchema,
  carrinhoProdutoAddSchema,
  carrinhoProdutoRemoveSchema,
};
