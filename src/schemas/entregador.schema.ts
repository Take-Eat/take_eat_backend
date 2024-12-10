import { z } from "zod";
import {
  commonCreateWithoutIdUsuarioSchema,
  commonSchema,
} from "./common.schema";

const dadosExtraSchema = z.object({
  cpf: z.string().length(11),
  cnh: z.string().length(9),
});

const entregadorSchema = commonSchema.merge(dadosExtraSchema).omit({
  razaoSocial: true,
  cnpj: true,
});

const entregadorCreateSchema = entregadorSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const entregadorCreateWithoutIdUsuarioSchema =
  commonCreateWithoutIdUsuarioSchema.merge(dadosExtraSchema).omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    razaoSocial: true,
    cnpj: true,
  });

const entregadorUpdateSchema = entregadorCreateSchema.partial();

export {
  entregadorSchema,
  entregadorCreateSchema,
  entregadorUpdateSchema,
  entregadorCreateWithoutIdUsuarioSchema,
};
