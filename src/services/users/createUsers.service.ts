import { AppError } from "../../errors";
import { iApoiadorCreate } from "../../interfaces/apoiador.interface";
import { iDistribuidorCreate } from "../../interfaces/distribuidor.interface";
import { iDoadorCreate } from "../../interfaces/doador.interface";
import { iEntregadorCreate } from "../../interfaces/entregador.interface";
import {
  iUserCommonCreate,
  iUsersWithoutPass,
} from "../../interfaces/user.interface";
import Apoiador from "../../models/Apoiador";
import Distribuidor from "../../models/Distribuidor";
import Doador from "../../models/Doador";
import Entregador from "../../models/Entregador";
import User from "../../models/User";
import { apoiadorCreateSchema } from "../../schemas/apoiador.schema";
import { distribuidorCreateSchema } from "../../schemas/distribuidor.schema";
import { doadorCreateSchema } from "../../schemas/doador.schema";
import { entregadorCreateSchema } from "../../schemas/entregador.schema";
import {
  usersWithoutPassSchema,
  usersCreateSchema,
} from "../../schemas/users.schema";

// Serviços para criação nas tabelas específicas
const createDoador = async (payload: iDoadorCreate, idUsuario: number) => {
  const parsedDoador = doadorCreateSchema.parse({ ...payload, idUsuario });

  return await Doador.create(parsedDoador);
};

const createDistribuidor = async (
  payload: iDistribuidorCreate,
  idUsuario: number
) => {
  const parsedDistribuidor = distribuidorCreateSchema.parse({
    ...payload,
    idUsuario,
  });

  return await Distribuidor.create(parsedDistribuidor);
};

const createEntregador = async (
  payload: iEntregadorCreate,
  idUsuario: number
) => {
  const parsedEntregador = entregadorCreateSchema.parse({
    ...payload,
    idUsuario,
  });

  return await Entregador.create(parsedEntregador);
};

const createApoiador = async (payload: iApoiadorCreate, idUsuario: number) => {
  const parsedApoiador = apoiadorCreateSchema.parse({ ...payload, idUsuario });

  return await Apoiador.create(parsedApoiador);
};

// Serviço principal
const createUsersService = async (
  payload: any // Recebe o payload bruto
): Promise<iUsersWithoutPass> => {
  // Valida os dados comuns a todos os usuários
  const parsedUser = usersCreateSchema.parse(payload);

  // Verifica se o e-mail já existe
  const checkEmail = await User.findOne({ where: { email: parsedUser.email } });
  if (checkEmail) {
    throw new AppError("Email já existe", 409);
  }

  // Cria o registro principal na tabela User
  const createdUser = await User.create(parsedUser);

  // Processa o restante dos dados de acordo com o role
  switch (createdUser.role) {
    case "doador":
      await createDoador(payload, createdUser.id);
      break;
    case "distribuidor":
      await createDistribuidor(payload, createdUser.id);
      break;
    case "entregador":
      await createEntregador(payload, createdUser.id);
      break;
    case "apoiador":
      await createApoiador(payload, createdUser.id);
      break;
    default:
      throw new AppError("Role inválido", 400);
  }

  // Retorna o usuário criado sem a senha
  const userWithoutPass: iUsersWithoutPass =
    usersWithoutPassSchema.parse(createdUser);

  return userWithoutPass;
};

export default createUsersService;
