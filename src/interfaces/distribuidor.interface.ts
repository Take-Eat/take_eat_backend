import { z } from "zod";
import {
  distribuidorCreateSchema,
  distribuidorSchema,
} from "../schemas/distribuidor.schema";

type iDistribuidor = z.infer<typeof distribuidorSchema>;
type iDistribuidorCreate = z.infer<typeof distribuidorCreateSchema>;
type iDistribuidorUpdate = Partial<
  Pick<iDistribuidorCreate, keyof iDistribuidorCreate>
>;

export { iDistribuidor, iDistribuidorCreate, iDistribuidorUpdate };