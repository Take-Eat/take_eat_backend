import { z } from "zod";

const veiculoSchema = z.object({
  id: z.number(),
  type: z.enum(["motocicleta", "automovel", "carga"]),
  placa: z.string().length(7),
  idApoiador: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const veiculoCreateSchema = veiculoSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const veiculoUpdateSchema = veiculoCreateSchema.partial();

export { veiculoSchema, veiculoCreateSchema, veiculoUpdateSchema };
