import { z } from "zod";

const pedidoSchema = z.object({
  id: z.number(),
  statusEntrega: z.enum(["Pendente", "Preparando", "Enviado", "Entregue"]),
  idDistribuidor: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const pedidoCreateSchema = pedidoSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const pedidoUpdateSchema = pedidoCreateSchema.partial();

export { pedidoSchema, pedidoCreateSchema, pedidoUpdateSchema };
