import { z } from "zod";
import {
  carteiraCreateSchema,
  carteiraSchema,
} from "../schemas/carteira.schema";

type iCarteira = z.infer<typeof carteiraSchema>;
type iCarteiraCreate = z.infer<typeof carteiraCreateSchema>;
type iCarteiraUpdate = Partial<Pick<iCarteiraCreate, keyof iCarteiraCreate>>;

export { iCarteira, iCarteiraCreate, iCarteiraUpdate };
