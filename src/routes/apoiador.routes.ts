import { Router } from "express";
import {
  createUsersController,
  deleteUsersController,
  forgotPasswordController,
  getAllUsersController,
  getUserIdController,
  getUsersController,
  resetPasswordController,
  updateUsersController,
} from "../controllers/user.controllers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureExistsMiddleware from "../middlewares/ensureExists.middleware";
import { usersUpdateSchema } from "../schemas/users.schema";
import User from "../models/User";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import {
  apoiadorCreateSchema,
  apoiadorUpdateSchema,
} from "../schemas/apoiador.schema";
import {
  deleteApoiadorController,
  getAllApoiadorController,
  getApoiadorIdController,
  updateApoiadorController,
} from "../controllers/apoiador.controllers";
import Apoiador from "../models/Apoiador";

const apoidorRoutes = Router();

apoidorRoutes.get("", getAllApoiadorController, ensureTokenIsValidMiddleware); // Pegar todos apoiadores

apoidorRoutes.get(
  "/:id",
  ensureExistsMiddleware(Apoiador, "Apoiador"),
  ensureTokenIsValidMiddleware,
  getApoiadorIdController
); // buscar um apoiador por id

apoidorRoutes.patch(
  "/:id",
  ensureExistsMiddleware(Apoiador, "Apoiador"),
  ensureDataIsValidMiddleware(apoiadorUpdateSchema),
  ensureTokenIsValidMiddleware,
  updateApoiadorController
); // Update em apoiador

apoidorRoutes.delete(
  "/:id",
  ensureExistsMiddleware(Apoiador, "Apoiador"), // a validação fica com a tabela de usuario, porque o id que vem do parametro é o do usuário
  deleteApoiadorController
); // Deletar apoiador

export default apoidorRoutes;
