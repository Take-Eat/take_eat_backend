import { Op } from "sequelize";
import { AppError } from "../../errors";
import {
  iEntregador,
  iEntregadorUpdate,
} from "../../interfaces/entregador.interface";
import Entregador from "../../models/Entregador";
import getEntregadorIdService from "./getEntregadorId.service";

/**
 * Serviço para atualizar um Entregador.
 *
 * @async
 * @function updateEntregadorService
 * @param {iEntregadorUpdate} payload - Os dados necessários para atualizar o Entregador.
 * @param {number} id - Identificação do Entregador atualizar seus dados.
 * @throws {AppError} Caso a atualização do Entregador falhe.
 * @returns {Promise<iEntregador>} O Entregador atualizado e validado.
 *
 * @example
 * // Exemplo de chamada
 * const updatedEntregador = await updateEntregadorService(id, payload);
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

const updateEntregadorService = async (
  id: number,
  payload: iEntregadorUpdate
): Promise<iEntregador> => {
  if (payload.cpf) {
    const retrivedEntregadorCpf = await Entregador.findOne({
      where: { cpf: payload.cpf, id: { [Op.ne]: id } },
    });

    if (retrivedEntregadorCpf?.cpf) {
      throw new AppError("Esse cpf já está em uso!", 400);
    }

    const retrivedEntregadorCnh = await Entregador.findOne({
      where: { cnh: payload.cnh, id: { [Op.ne]: id } },
    });

    if (retrivedEntregadorCnh?.cnh) {
      throw new AppError("Essa cnh já está em uso!", 400);
    }
  }

  await Entregador.update(payload, {
    where: { id },
  });

  return await getEntregadorIdService(id);
};

export default updateEntregadorService;
