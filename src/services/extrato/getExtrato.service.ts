import { AppError } from "../../errors";
import { iExtrato } from "../../interfaces/extrato.interface";
import Extrato from "../../models/Extrato";
import { extratoSchema } from "../../schemas/extrato.schema";

const getExtratoIdService = async (id: number): Promise<iExtrato> => {
  const retrivedExtrato = await Extrato.findOne({
    where: { id },
  });

  if (!retrivedExtrato) {
    throw new AppError("Não foi possível encontrar o extrato!", 404);
  }

  return extratoSchema.parse(retrivedExtrato);
};

export default getExtratoIdService;
