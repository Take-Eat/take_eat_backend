import { z } from "zod";
import {
  commonCreateWithoutIdUsuarioSchema,
  commonSchema,
} from "./common.schema";

const dadosExtraSchema = z.object({
  ramoAlimenticio: z.string().min(3).max(55),
  horarioRetirada: z.string().min(3).max(255),
});

const doadorSchema = commonSchema.merge(dadosExtraSchema);

const doadorCreateSchema = doadorSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const doadorCreateWithoutIdUsuarioSchema = commonCreateWithoutIdUsuarioSchema
  .merge(dadosExtraSchema)
  .omit({
    id: true,
    createdAt: true,
    deletedAt: true,
    updatedAt: true,
  });

const doadorUpdateSchema = doadorCreateSchema.partial();

export {
  doadorSchema,
  doadorCreateSchema,
  doadorUpdateSchema,
  doadorCreateWithoutIdUsuarioSchema,
};
