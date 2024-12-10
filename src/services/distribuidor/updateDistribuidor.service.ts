import { Op } from "sequelize";
import { AppError } from "../../errors";
import {
  iDistribuidor,
  iDistribuidorUpdate,
} from "../../interfaces/distribuidor.interface";
import Distribuidor from "../../models/Distribuidor";
import getDistribuidorIdService from "./getDistribuidorId.service";

/**
 * Serviço para atualizar um Distribuidor.
 *
 * @async
 * @function updateDistribuidorService
 * @param {iDistribuidorUpdate} payload - Os dados necessários para atualizar o Distribuidor.
 * @param {number} id - Identificação do Distribuidor atualizar seus dados.
 * @throws {AppError} Caso a atualização do Distribuidor falhe.
 * @returns {Promise<iDistribuidor>} O Distribuidor atualizado e validado.
 *
 * @example
 * // Exemplo de chamada
 * const updatedDistribuidor = await updateDistribuidorService(id, payload);
 *
 * // Exemplo de resposta
 * {
    id: number;
    razaoSocial: string;
    cnpj: string;
    endereco: string;
    idUsuario: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
 * }
 */

const updateDistribuidorService = async (
  id: number,
  payload: iDistribuidorUpdate
): Promise<iDistribuidor> => {
  if (payload.cnpj) {
    const retrivedDistribuidor = await Distribuidor.findOne({
      where: { cnpj: payload.cnpj, id: { [Op.ne]: id } },
    });

    if (retrivedDistribuidor) {
      throw new AppError("Esse cnpj já está em uso!", 400);
    }
  }

  await Distribuidor.update(payload, {
    where: { id, deletedAt: null },
  });

  return await getDistribuidorIdService(id);
};

export default updateDistribuidorService;
