import { z } from "zod";
import { commonSchema } from "./common.schema";

const entregadorSchema = commonSchema
  .extend({
    nome: z.string().max(255),
    cpf: z.string().length(11),
    cnh: z.string().length(9),
  })
  .omit({
    razaoSocial: true,
    cnpj: true,
  });

const entregadorCreateSchema = entregadorSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const entregadorUpdateSchema = entregadorCreateSchema.partial();

export { entregadorSchema, entregadorCreateSchema, entregadorUpdateSchema };
