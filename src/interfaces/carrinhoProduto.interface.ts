import { z } from "zod";
import {
  carrinhoProdutoAddSchema,
  carrinhoProdutoCreateSchema,
  carrinhoProdutoRemoveSchema,
  carrinhoProdutoSchema,
} from "../schemas/carrinhoProduto.schema";

type iCarrinhoProduto = z.infer<typeof carrinhoProdutoSchema>;
type iCarrinhoProdutoCreate = z.infer<typeof carrinhoProdutoCreateSchema>;
type iCarrinhoProdutoAdd = z.infer<typeof carrinhoProdutoAddSchema>;
type iCarrinhoProdutoRemove = z.infer<typeof carrinhoProdutoRemoveSchema>;
type iCarrinhoProdutoUpdate = Partial<
  Pick<iCarrinhoProdutoCreate, keyof iCarrinhoProdutoCreate>
>;

export {
  iCarrinhoProduto,
  iCarrinhoProdutoCreate,
  iCarrinhoProdutoAdd,
  iCarrinhoProdutoRemove,
  iCarrinhoProdutoUpdate,
};
