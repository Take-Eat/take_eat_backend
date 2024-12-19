import { z } from "zod";

const carrinhoSchema = z.object({
  id: z.number(),
  idDistribuidor: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const carrinhoCreateSchema = carrinhoSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const carrinhoUpdateSchema = carrinhoCreateSchema.partial();

export { carrinhoSchema, carrinhoCreateSchema, carrinhoUpdateSchema };
