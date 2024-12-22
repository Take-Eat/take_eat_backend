import { z } from "zod";

const produtoSchema = z.object({
  id: z.number(),
  name: z.string().min(3).max(55),
  tipo: z.string().min(3).max(55),
  quantidade: z.number(),
  tempoDisponivel: z
    .string()
    .regex(
      /^\d{4}-\d{2}-\d{2}$/,
      "Tempo disponível deve estar no formato YYYY-MM-DD!"
    ), // Valida o formato de data (string ISO)
  idDoador: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const produtoCreateSchema = produtoSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const produtoUpdateSchema = produtoCreateSchema.partial();

export { produtoSchema, produtoCreateSchema, produtoUpdateSchema };
