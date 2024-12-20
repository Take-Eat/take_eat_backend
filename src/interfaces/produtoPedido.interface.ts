import { z } from "zod";
import {
  produtoProdutoCreateSchema,
  produtoProdutoSchema,
} from "../schemas/produtoPedido.schema";

type iProdutoPedido = z.infer<typeof produtoProdutoSchema>;
type iProdutoPedidoCreate = z.infer<typeof produtoProdutoCreateSchema>;

export { iProdutoPedido, iProdutoPedidoCreate };
