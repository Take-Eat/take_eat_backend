import { z } from "zod";

const carteiraSchema = z.object({
  id: z.number(),
  saldoEatCoin: z.number(),
  totalEatCoin: z.number(),
  totalDoado: z.number(),
  idApoiador: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const carteiraCreateSchema = carteiraSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const carteiraUpdateSchema = carteiraCreateSchema.partial();

export { carteiraSchema, carteiraCreateSchema, carteiraUpdateSchema };
