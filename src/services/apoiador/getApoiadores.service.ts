import { AppError } from "../../errors";
import { iApoiador } from "../../interfaces/apoiador.interface";
import Apoiador from "../../models/Apoiador";
import { apoiadorSchema } from "../../schemas/apoiador.schema";

const getApoiadoresService = async (
  page: number,
  limit: number
): Promise<iApoiador[]> => {
  const offset = (page - 1) * limit;

  const retrivedApoiadores = await Apoiador.findAll({
    offset,
    limit,
    where: { deletedAt: null },
  });

  if (!retrivedApoiadores) {
    throw new AppError("Não existe nenhum apoiador registrado!", 404);
  }

  return apoiadorSchema.array().parse(retrivedApoiadores);
};

export default getApoiadoresService;
