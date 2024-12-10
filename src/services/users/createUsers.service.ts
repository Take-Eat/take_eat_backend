import { AppError } from "../../errors";
import { iApoiadorCreate } from "../../interfaces/apoiador.interface";
import { iDistribuidorCreate } from "../../interfaces/distribuidor.interface";
import { iDoadorCreate } from "../../interfaces/doador.interface";
import { iEntregadorCreate } from "../../interfaces/entregador.interface";
import { iUsersWithoutPass } from "../../interfaces/user.interface";
import Apoiador from "../../models/Apoiador";
import Distribuidor from "../../models/Distribuidor";
import Doador from "../../models/Doador";
import Entregador from "../../models/Entregador";
import User from "../../models/User";
import { apoiadorCreateWithoutIdUsuarioSchema } from "../../schemas/apoiador.schema";
import { distribuidorCreateWithoutIdUsuarioSchema } from "../../schemas/distribuidor.schema";
import { doadorCreateWithoutIdUsuarioSchema } from "../../schemas/doador.schema";
import { entregadorCreateWithoutIdUsuarioSchema } from "../../schemas/entregador.schema";
import {
  usersWithoutPassSchema,
  usersCreateSchema,
} from "../../schemas/users.schema";

const createUser = async (payload: any) => {
  const parsedUser = usersCreateSchema.parse(payload);

  // Verifica se o e-mail já existe
  const checkEmail = await User.findOne({ where: { email: parsedUser.email } });
  if (checkEmail) {
    throw new AppError("Email já existe", 409);
  }

  const createdUser = await User.create(parsedUser);

  return usersWithoutPassSchema.parse(createdUser);
};

// Serviços para criação nas tabelas específicas
const createDoador = async (payload: any) => {
  const parsedDoador = doadorCreateWithoutIdUsuarioSchema.parse(payload);

  const createdUserWithoutPass = await createUser(payload);

  await Doador.create({
    ...parsedDoador,
    idUsuario: createdUserWithoutPass.id,
  });
  return createdUserWithoutPass;
};

const createDistribuidor = async (payload: any) => {
  const parsedDistribuidor =
    distribuidorCreateWithoutIdUsuarioSchema.parse(payload);

  const createdUserWithoutPass = await createUser(payload);

  await Distribuidor.create({
    ...parsedDistribuidor,
    idUsuario: createdUserWithoutPass.id,
  });
  return createdUserWithoutPass;
};

const createEntregador = async (payload: any) => {
  const parsedEntregador =
    entregadorCreateWithoutIdUsuarioSchema.parse(payload);

  const createdUserWithoutPass = await createUser(payload);

  await Entregador.create({
    ...parsedEntregador,
    idUsuario: createdUserWithoutPass.id,
  });
  return createdUserWithoutPass;
};

const createApoiador = async (payload: any) => {
  const parsedApoiador = apoiadorCreateWithoutIdUsuarioSchema.parse(payload);

  const createdUserWithoutPass = await createUser(payload);

  await Apoiador.create({
    ...parsedApoiador,
    idUsuario: createdUserWithoutPass.id,
  });
  return createdUserWithoutPass;
};

// Serviço principal
const createUsersService = async (
  payload: any // Recebe o payload bruto
): Promise<iUsersWithoutPass> => {
  // Valida os dados comuns a todos os usuários
  if (!payload.role) {
    throw new AppError("Role inválida!", 400);
  }

  // Processa o restante dos dados de acordo com o role
  switch (payload.role) {
    case "doador":
      return await createDoador(payload);
    case "distribuidor":
      return await createDistribuidor(payload);
    case "entregador":
      return await createEntregador(payload);
    case "apoiador":
      return await createApoiador(payload);
    default:
      throw new AppError("Role inválido", 400);
  }
};

export default createUsersService;
