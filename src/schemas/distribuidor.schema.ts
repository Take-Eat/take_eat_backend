import {
  commonCreateWithoutIdUsuarioSchema,
  commonSchema,
} from "./common.schema";

const distribuidorSchema = commonSchema;

const distribuidorCreateSchema = distribuidorSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const distribuidorCreateWithoutIdUsuarioSchema =
  commonCreateWithoutIdUsuarioSchema.omit({
    id: true,
    createdAt: true,
    deletedAt: true,
    updatedAt: true,
  });

const distribuidorUpdateSchema = distribuidorCreateSchema.partial();

export {
  distribuidorSchema,
  distribuidorCreateSchema,
  distribuidorUpdateSchema,
  distribuidorCreateWithoutIdUsuarioSchema,
};
