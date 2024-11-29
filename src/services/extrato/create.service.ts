import { AppError } from "../../errors";

import { iExtrato, iExtratoCreate } from "../../interfaces/extrato.interface";
import Extrato from "../../models/Extrato";
import { extratoSchema } from "../../schemas/extrato.schema";

const createExtratoService = async (
  payload: iExtratoCreate 
): Promise<iExtrato> => {
  const createdExtrato = await Extrato.create(payload);

  if (createdExtrato) {
    throw new AppError("Não foi possível criar o extrato", 409);
  }

  const parsedExtrato = extratoSchema.parse(createdExtrato);
  return parsedExtrato;
};

export default createExtratoService;
