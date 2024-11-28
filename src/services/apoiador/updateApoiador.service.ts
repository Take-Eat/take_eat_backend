import { Op } from "sequelize";
import { AppError } from "../../errors";
import {
  iApoiador,
  iApoiadorUpdate,
} from "../../interfaces/apoiador.interface";
import Apoiador from "../../models/Apoiador";
import { apoiadorSchema } from "../../schemas/apoiador.schema";

const updateApoiadorService = async (
  idUsuario: number,
  payload: iApoiadorUpdate
): Promise<iApoiador> => {
  if (payload.cnpj) {
    const retrivedApoiador = await Apoiador.findOne({
      where: { cnpj: payload.cnpj, idUsuario: { [Op.ne]: idUsuario } },
    });

    if (retrivedApoiador) {
      throw new AppError("Esse cnpj já está em uso!", 400);
    }
  }

  await Apoiador.update(payload, {
    where: { idUsuario },
  });

  const updatedApoiador = Apoiador.findOne({ where: { idUsuario } });

  return apoiadorSchema.parse(updatedApoiador);
};

export default updateApoiadorService;
