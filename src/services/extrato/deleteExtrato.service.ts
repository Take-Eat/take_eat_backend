import Extrato from "../../models/Extrato";

/**
  * [Descrição do serviço]
 \*
  * @async
  * @function deleteExtratoIdService
  * @param {[number]} id - Número que identifica o extrato que será deletado.
  * @throws {AppError} Caso a exclusão do extrato falhe.
  * @returns {Promise<void>} Não há retorno.
 \*
  * @example
  * // Exemplo de chamada
  * await deleteExtratoIdService(2);
 */

const deleteExtratoIdService = async (id: number): Promise<void> => {
  await Extrato.destroy({
    where: { id },
  });

  return;
};

export default deleteExtratoIdService;
