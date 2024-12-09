import deleteUsersService from "../users/deleteUsers.service";

/**
  * Serviço para deletar um doador
 \*
  * @async
  * @function deleteDoadorService
  * @param {[number]} idUsuario - Número que identifica o USUARIO DOADOR que será deletado. O ID deve ser o da chave estrangeira!!
  * @throws {AppError} Caso a exclusão do doador falhe.
  * @returns {Promise<void>} Não há retorno.
 \*
  * @example
  * // Exemplo de chamada
  * await deleteDoadorService(2);
 */

const deleteDoadorService = async (idUsuario: number): Promise<void> => {
  await deleteUsersService(idUsuario);
};

export default deleteDoadorService;
