import { AppError } from "../../errors";
import { iApoiador } from "../../interfaces/apoiador.interface";
import Apoiador from "../../models/Apoiador";
import { apoiadorSchema } from "../../schemas/apoiador.schema";

const getApoiadorIdService = async (id: number): Promise<iApoiador> => {
  const retrivedApoiador = await Apoiador.findOne({
    where: { id },
  });

  if (!retrivedApoiador) {
    throw new AppError("Apoiador nao encontrado!", 404);
  }

  return apoiadorSchema.parse(retrivedApoiador);
};

export default getApoiadorIdService;
