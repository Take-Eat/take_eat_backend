import { AppError } from "../../errors";
import { iExtrato } from "../../interfaces/extrato.interface";
import Extrato from "../../models/Extrato";
import { extratoSchema } from "../../schemas/extrato.schema";

const getAllExtrato = async (idApoiador: number): Promise<iExtrato[]> => {
  const retrivedExtratos = await Extrato.findAll({
    where: { idApoiador },
  });

  if (retrivedExtratos) {
    throw new AppError("Não foi possível encontrar o extrato!", 404);
  }

  return extratoSchema.array().parse(retrivedExtratos);
};

export default getAllExtrato;
