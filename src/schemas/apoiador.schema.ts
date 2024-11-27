import { z } from "zod";
import { commonSchema } from "./common.schema";

const apoiadorSchema = commonSchema.extend({
  mungango: z.string().min(3).max(55).nullable(),
  instagram: z.string().min(3).max(55).nullable(),
  x: z.string().min(3).max(55).nullable(),
});

const apoiadorCreateSchema = apoiadorSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const apoiadorUpdateSchema = apoiadorCreateSchema.partial();

export { apoiadorSchema, apoiadorCreateSchema, apoiadorUpdateSchema };
