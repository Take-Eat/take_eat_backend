import Doador from "../../models/Doador";
import deleteUsersService from "../users/deleteUsers.service";
import getDoadorIdService from "./getDoadorId.service";

/**
  * Serviço para deletar um doador
 \*
  * @async
  * @function deleteDoadorService
  * @param {[number]} id - Número que identifica o DOADOR que será deletado.
  * @throws {AppError} Caso a exclusão do doador falhe.
  * @returns {Promise<void>} Não há retorno.
 \*
  * @example
  * // Exemplo de chamada
  * await deleteDoadorService(2);
 */

const deleteDoadorService = async (id: number): Promise<void> => {
  const retrivedDoador = await getDoadorIdService(id);

  const deletedAt = new Date();

  await Doador.update({ deletedAt }, { where: { id, deletedAt: null } });

  // Chame o serviço para marcar o usuário como deletado
  await deleteUsersService(retrivedDoador.idUsuario);
  return;
};

export default deleteDoadorService;
