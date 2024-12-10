import Distribuidor from "../../models/Distribuidor";
import deleteUsersService from "../users/deleteUsers.service";
import getDistribuidorIdService from "./getDistribuidorId.service";

/**
  * Serviço para deletar um Distribuidor
 \*
  * @async
  * @function deleteDistribuidorService
  * @param {[number]} id - Número que identifica o Distribuidor que será deletado.
  * @throws {AppError} Caso a exclusão do Distribuidor falhe.
  * @returns {Promise<void>} Não há retorno.
 \*
  * @example
  * // Exemplo de chamada
  * await deleteDistribuidorService(2);
 */

const deleteDistribuidorService = async (id: number): Promise<void> => {
  const retrivedDistribuidor = await getDistribuidorIdService(id);

  const deletedAt = new Date();

  await Distribuidor.update({ deletedAt }, { where: { id, deletedAt: null } });

  // Chame o serviço para marcar o usuário como deletado
  await deleteUsersService(retrivedDistribuidor.idUsuario);
  return;
};

export default deleteDistribuidorService;
