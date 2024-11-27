import { z } from "zod";

const commonSchema = z.object({
  id: z.number(),
  razaoSocial: z.string().min(3).max(255),
  cnpj: z.string().length(14),
  endereco: z.string().min(5).max(255),
  idUsuario: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export { commonSchema };