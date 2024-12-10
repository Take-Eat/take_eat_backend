import { z } from "zod";
import { doadorCreateSchema, doadorSchema } from "../schemas/doador.schema";

type iDoador = z.infer<typeof doadorSchema>;
type iDoadorCreate = z.infer<typeof doadorCreateSchema>;
type iDoadorUpdate = Partial<Pick<iDoadorCreate, keyof iDoadorCreate>>;

export { iDoador, iDoadorCreate, iDoadorUpdate };