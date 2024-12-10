import deleteUsersService from "../users/deleteUsers.service";

/**
  * Serviço para deletar um Entregador
 \*
  * @async
  * @function deleteEntregadorService
  * @param {[number]} idUsuario - Número que identifica o USUARIO ENTREGADOR que será deletado. O ID deve ser o da chave estrangeira!!
  * @throws {AppError} Caso a exclusão do Entregador falhe.
  * @returns {Promise<void>} Não há retorno.
 \*
  * @example
  * // Exemplo de chamada
  * await deleteEntregadorService(2);
 */

const deleteEntregadorService = async (idUsuario: number): Promise<void> => {
  await deleteUsersService(idUsuario);
};

export default deleteEntregadorService;
