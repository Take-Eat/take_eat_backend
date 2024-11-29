// import { Router } from "express";
// import {
//   createUsersController,
//   deleteUsersController,
//   forgotPasswordController,
//   getAllUsersController,
//   getUserIdController,
//   getUsersController,
//   resetPasswordController,
//   updateUsersController,
// } from "../controllers/user.controllers";
// import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
// import ensureExistsMiddleware from "../middlewares/ensureExists.middleware";
// import {

//   usersUpdateSchema,
// } from "../schemas/users.schema";
// import User from "../models/User";
// import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
// import { apoiadorCreateSchema } from "../schemas/apoiador.schema";

// const apoidorRoutes = Router();

// apoidorRoutes.get("", getAllUsersController);

// apoidorRoutes.get(
//   "/:id",
//   ensureExistsMiddleware(User, "Usuário"),
//   getUserIdController
// ); // buscar um apoiador por id

// apoidorRoutes.post(
//   "",
//   ensureDataIsValidMiddleware(apoiadorCreateSchema)
//   createUsersController
// );

// apoidorRoutes.patch(
//   "/:id",
//   ensureExistsMiddleware(User, "Usuário"),
//   ensureDataIsValidMiddleware(usersUpdateSchema),
//   ensureTokenIsValidMiddleware,
//   updateUsersController
// );

// apoidorRoutes.delete(
//   "/:id",
//   ensureExistsMiddleware(User, "Usuário"),
//   deleteUsersController
// );

// export default apoidorRoutes;
