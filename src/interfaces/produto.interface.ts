import { z } from "zod";
import { produtoCreateSchema, produtoSchema } from "../schemas/produto.schema";

type iProduto = z.infer<typeof produtoSchema>;
type iProdutoCreate = z.infer<typeof produtoCreateSchema>;
type iProdutoUpdate = Partial<Pick<iProdutoCreate, keyof iProdutoCreate>>;

export { iProduto, iProdutoCreate, iProdutoUpdate };

// name: string;
// tipo: string;
// quantidade: number;
// tempoDisponivel: Date;
// idDoador: number;