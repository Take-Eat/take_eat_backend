import { z } from "zod";
import { produtoSchema } from "./produto.schema";

const pedidoSchema = z.object({
  id: z.number(),
  statusEntrega: z.enum(["Pendente", "Preparando", "Enviado", "Entregue"]),
  idDistribuidor: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const pedidoWithProdutoSchema = pedidoSchema.extend({
  produtos: produtoSchema.array(),
});

const pedidoCreateSchema = pedidoSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const pedidoUpdateSchema = pedidoCreateSchema.partial();

export {
  pedidoSchema,
  pedidoWithProdutoSchema,
  pedidoCreateSchema,
  pedidoUpdateSchema,
};
