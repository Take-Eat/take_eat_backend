import { Op } from "sequelize";
import { AppError } from "../../errors";
import {
  iApoiador,
  iApoiadorUpdate,
} from "../../interfaces/apoiador.interface";
import Apoiador from "../../models/Apoiador";
import { apoiadorSchema } from "../../schemas/apoiador.schema";
import getApoiadorIdService from "./getApoiadorId.service";

const updateApoiadorService = async (
  id: number,
  payload: iApoiadorUpdate
): Promise<iApoiador> => {
  if (payload.cnpj) {
    const retrivedApoiador = await Apoiador.findOne({
      where: { cnpj: payload.cnpj, id: { [Op.ne]: id } },
    });

    if (retrivedApoiador) {
      throw new AppError("Esse cnpj já está em uso!", 400);
    }
  }

  await Apoiador.update(payload, {
    where: { id, deletedAt: null },
  });

  return await getApoiadorIdService(id);
};

export default updateApoiadorService;
