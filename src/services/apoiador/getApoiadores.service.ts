import { AppError } from "../../errors";
import { iApoiador } from "../../interfaces/apoiador.interface";
import Apoiador from "../../models/Apoiador";
import { apoiadorSchema } from "../../schemas/apoiador.schema";

const getApoiadoresService = async (): Promise<iApoiador[]> => {
  const retrivedApoiadores = await Apoiador.findAll();

  if (!retrivedApoiadores) {
    throw new AppError("Não existe nenhum apoiador registrado!", 404);
  }

  return apoiadorSchema.array().parse(retrivedApoiadores);
};

export default getApoiadoresService;
