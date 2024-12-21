import { z } from "zod";
import {
  carrinhoProdutoCreateSchema,
  carrinhoProdutoSchema,
} from "../schemas/carrinhoProduto.schema";

type iCarrinhoProduto = z.infer<typeof carrinhoProdutoSchema>;
type iCarrinhoProdutoCreate = z.infer<typeof carrinhoProdutoCreateSchema>;
type iCarrinhoProdutoUpdate = Partial<
  Pick<iCarrinhoProdutoCreate, keyof iCarrinhoProdutoCreate>
>;

export { iCarrinhoProduto, iCarrinhoProdutoCreate, iCarrinhoProdutoUpdate };
