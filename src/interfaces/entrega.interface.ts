import { z } from "zod";
import {
  entregaCreateSchema,
  entregaSchema,
} from "../schemas/entrega.schema";

type iEntrega = z.infer<typeof entregaSchema>;
type iEntregaCreate = z.infer<typeof entregaCreateSchema>;
type iEntregaUpdate = Partial<Pick<iEntregaCreate, keyof iEntregaCreate>>;

export { iEntrega, iEntregaCreate, iEntregaUpdate };
