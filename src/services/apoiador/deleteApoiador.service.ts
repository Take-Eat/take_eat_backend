import deleteUsersService from "../users/deleteUsers.service";

const deleteApoiadorService = async (id: number) => {
  await deleteUsersService(id);
};

export default deleteApoiadorService;
