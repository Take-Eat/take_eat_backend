import { z } from "zod";
import {
  addProdutoCarrinhoSchema,
  carrinhoProdutoCreateSchema,
  carrinhoProdutoSchema,
} from "../schemas/carrinhoProduto.schema";

type iCarrinhoProduto = z.infer<typeof carrinhoProdutoSchema>;
type iCarrinhoProdutoCreate = z.infer<typeof carrinhoProdutoCreateSchema>;
type iCarrinhoProdutoAdd = z.infer<typeof addProdutoCarrinhoSchema>;
type iCarrinhoProdutoUpdate = Partial<
  Pick<iCarrinhoProdutoCreate, keyof iCarrinhoProdutoCreate>
>;

export {
  iCarrinhoProduto,
  iCarrinhoProdutoCreate,
  iCarrinhoProdutoAdd,
  iCarrinhoProdutoUpdate,
};
