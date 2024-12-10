import Apoiador from "../../models/Apoiador";
import deleteUsersService from "../users/deleteUsers.service";
import getApoiadorIdService from "./getApoiadorId.service";

const deleteApoiadorService = async (id: number) => {
  const retrivedApoiador = await getApoiadorIdService(id);

  const deletedAt = new Date();

  await Apoiador.update({ deletedAt }, { where: { id, deletedAt: null } });

  // Chame o serviço para marcar o usuário como deletado
  await deleteUsersService(retrivedApoiador.idUsuario);
  return;
};

export default deleteApoiadorService;
