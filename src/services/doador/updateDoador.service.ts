import { Op } from "sequelize";
import { AppError } from "../../errors";
import { iDoador, iDoadorUpdate } from "../../interfaces/doador.interface";
import Doador from "../../models/Doador";
import getDoadorIdService from "./getDoadorId.service";

/**
 * Serviço para atualizar um doador.
 *
 * @async
 * @function updateDoadorService
 * @param {iDoadorUpdate} payload - Os dados necessários para atualizar o doador.
 * @param {number} id - Identificação do doador atualizar seus dados.
 * @throws {AppError} Caso a atualização do doador falhe.
 * @returns {Promise<iDoador>} O doador atualizado e validado.
 *
 * @example
 * // Exemplo de chamada
 * const updatedDoador = await updateDoadorService(id, payload);
 *
 * // Exemplo de resposta
 * {
 * id: number;
 * razaoSocial: string;
 * cnpj: string;
 * endereco: string;
 * idUsuario: number;
 * createdAt: Date;
 * updatedAt: Date;
 * ramoAlimenticio: string;
 * horarioRetirada: string;
 * }
 */

const updateDoadorService = async (
  id: number,
  payload: iDoadorUpdate
): Promise<iDoador> => {
  if (payload.cnpj) {
    const retrivedDoador = await Doador.findOne({
      where: { cnpj: payload.cnpj, id: { [Op.ne]: id } },
    });

    if (retrivedDoador) {
      throw new AppError("Esse cnpj já está em uso!", 400);
    }
  }

  await Doador.update(payload, {
    where: { id },
  });

  return await getDoadorIdService(id);
};

export default updateDoadorService;
