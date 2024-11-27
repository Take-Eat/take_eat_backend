import { z } from "zod";
import {
  entregadorCreateSchema,
  entregadorSchema,
} from "../schemas/entregador.schema";

type iEntregador = z.infer<typeof entregadorSchema>;
type iEntregadorCreate = z.infer<typeof entregadorCreateSchema>;
type iEntregadorUpdate = Partial<
  Pick<iEntregadorCreate, keyof iEntregadorCreate>
>;

export { iEntregador, iEntregadorCreate, iEntregadorUpdate };