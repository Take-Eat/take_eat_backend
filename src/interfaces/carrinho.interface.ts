import { z } from "zod";
import {
  carrinhoCreateSchema,
  carrinhoSchema,
  carrinhoWithProdutoSchema,
} from "../schemas/carrinho.schema";

type iCarrinho = z.infer<typeof carrinhoSchema>;
type iCarrinhoProduto = z.infer<typeof carrinhoWithProdutoSchema>;
type iCarrinhoCreate = z.infer<typeof carrinhoCreateSchema>;
type iCarrinhoUpdate = Partial<Pick<iCarrinhoCreate, keyof iCarrinhoCreate>>;

export { iCarrinho, iCarrinhoProduto, iCarrinhoCreate, iCarrinhoUpdate };
