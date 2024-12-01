import { z } from "zod";
import {
  apoiadorCreateSchema,
  apoiadorSchema,
} from "../schemas/apoiador.schema";

type iApoiador = z.infer<typeof apoiadorSchema>;
type iApoiadorCreate = z.infer<typeof apoiadorCreateSchema>;
type iApoiadorUpdate = Partial<Pick<iApoiadorCreate, keyof iApoiadorCreate>>;

export { iApoiador, iApoiadorCreate, iApoiadorUpdate };