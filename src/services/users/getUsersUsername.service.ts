import { AppError } from "../../errors";
import { iUsersWithoutPass } from "../../interfaces/user.interface";
import User from "../../models/User";
import { usersWithoutPassSchema } from "../../schemas/users.schema";

const getUsersUsernameService = async (
  username: string
): Promise<iUsersWithoutPass> => {
  const retrivedUser = await User.findOne({
    where: { username, deletedAt: null },
  });

  if (!retrivedUser) {
    throw new AppError("Usuário não encontrado", 404);
  }

  return usersWithoutPassSchema.parse(retrivedUser);
};

export default getUsersUsernameService;
