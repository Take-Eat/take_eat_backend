import { z } from "zod";
import { commonSchema } from "./common.schema";

const doadorSchema = commonSchema.extend({
  ramoAlimenticio: z.string().min(3).max(55),
  horarioRetirada: z.string().min(3).max(255),
});

const doadorCreateSchema = doadorSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const doadorUpdateSchema = doadorCreateSchema.partial();

export { doadorSchema, doadorCreateSchema, doadorUpdateSchema };
