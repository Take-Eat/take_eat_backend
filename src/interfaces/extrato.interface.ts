import { z } from "zod";
import { extratoCreateSchema, extratoSchema } from "../schemas/extrato.schema";

type iExtrato = z.infer<typeof extratoSchema>;
type iExtratoCreate = z.infer<typeof extratoCreateSchema>;
type iExtratoUpdate = Partial<Pick<iExtratoCreate, keyof iExtratoCreate>>;

export { iExtrato, iExtratoCreate, iExtratoUpdate };

//  id: number;
//  totalDoado: number;
//  idApoiador: number;
//  createdAt: Date;
//  updatedAt: Date;