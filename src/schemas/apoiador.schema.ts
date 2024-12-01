import { z } from "zod";
import {
  commonCreateWithoutIdUsuarioSchema,
  commonSchema,
} from "./common.schema";

const dadosExtrasSchema = z.object({
  mungango: z.string().min(3).max(55).nullable().optional(),
  instagram: z.string().min(3).max(55).nullable().optional(),
  x: z.string().min(3).max(55).nullable().optional(),
});

const apoiadorSchema = commonSchema.merge(dadosExtrasSchema);

const apoiadorCreateSchema = apoiadorSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const apoiadorCreateWithoutIdUsuarioSchema = commonCreateWithoutIdUsuarioSchema
  .merge(dadosExtrasSchema)
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
  });

const apoiadorUpdateSchema = apoiadorCreateSchema.partial();

export {
  apoiadorSchema,
  apoiadorCreateSchema,
  apoiadorUpdateSchema,
  apoiadorCreateWithoutIdUsuarioSchema,
};
