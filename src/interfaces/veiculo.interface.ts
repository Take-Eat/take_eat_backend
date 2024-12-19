import { z } from "zod";
import { veiculoCreateSchema, veiculoSchema } from "../schemas/veiculo.schema";

type iVeiculo = z.infer<typeof veiculoSchema>;
type iVeiculoCreate = z.infer<typeof veiculoCreateSchema>;
type iVeiculoUpdate = Partial<Pick<iVeiculoCreate, keyof iVeiculoCreate>>;

export { iVeiculo, iVeiculoCreate, iVeiculoUpdate };
