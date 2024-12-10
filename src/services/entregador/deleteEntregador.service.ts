import Entregador from "../../models/Entregador";
import deleteUsersService from "../users/deleteUsers.service";
import getEntregadorIdService from "./getEntregadorId.service";

/**
  * Serviço para deletar um Entregador
 \*
  * @async
  * @function deleteEntregadorService
  * @param {[number]} id - Número que identifica o ENTREGADOR que será deletado.
  * @throws {AppError} Caso a exclusão do Entregador falhe.
  * @returns {Promise<void>} Não há retorno.
 \*
  * @example
  * // Exemplo de chamada
  * await deleteEntregadorService(2);
 */

const deleteEntregadorService = async (id: number): Promise<void> => {
  const retrivedEntregador = await getEntregadorIdService(id);

  const deletedAt = new Date();

  await Entregador.update({ deletedAt }, { where: { id, deletedAt: null } });

  // Chame o serviço para marcar o usuário como deletado
  await deleteUsersService(retrivedEntregador.idUsuario);
  return;
};

export default deleteEntregadorService;
