import { z } from "zod";

const extratoSchema = z.object({
  id: z.number(),
  totalDoado: z.number().multipleOf(0.01),
  idApoiador: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const extratoCreateSchema = extratoSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const extratoUpdateSchema = extratoCreateSchema.partial();

export { extratoSchema, extratoCreateSchema, extratoUpdateSchema };
