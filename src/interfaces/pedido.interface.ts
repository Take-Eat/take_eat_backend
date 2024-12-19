import { z } from "zod";
import {
  pedidoCreateSchema,
  pedidoSchema,
  pedidoWithProdutoSchema,
} from "../schemas/pedido.schema";

type iPedido = z.infer<typeof pedidoSchema>;
type iPedidoProduto = z.infer<typeof pedidoWithProdutoSchema>;
type iPedidoCreate = z.infer<typeof pedidoCreateSchema>;
type iPedidoUpdate = Partial<Pick<iPedidoCreate, keyof iPedidoCreate>>;

export { iPedido, iPedidoProduto, iPedidoCreate, iPedidoUpdate };
