import { AppError } from "../../errors";

import {
  iExtrato,
  iExtratoCreate,
  iExtratoUpdate,
} from "../../interfaces/extrato.interface";
import Extrato from "../../models/Extrato";
import { extratoSchema } from "../../schemas/extrato.schema";

const updateExtratoService = async (
  id: number,
  payload: iExtratoUpdate
): Promise<iExtrato> => {
  const createdExtrato = await Extrato.update(payload, { where: { id } });

  if (createdExtrato) {
    throw new AppError("Não foi possível criar o extrato", 409);
  }

  const parsedExtrato = extratoSchema.parse(createdExtrato);
  return parsedExtrato;
};

export default updateExtratoService;
