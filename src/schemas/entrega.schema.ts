import { string, z } from "zod";

const entregaSchema = z.object({
  id: z.number(),
  enderecoEntrega: string().min(3).max(255),
  enderecoEnvio: string().min(3).max(255),
  statusEntrega: z.enum(["Pendente", "Preparando", "Enviado", "Entregue"]),
  dataEntreda: z.string().date("Data inválida!"),
  idPedido: z.number(),
  idEntregador: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const entregaCreateSchema = entregaSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const entregaUpdateSchema = entregaCreateSchema.partial();

export { entregaSchema, entregaCreateSchema, entregaUpdateSchema };
