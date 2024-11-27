import { commonSchema } from "./common.schema";

const distribuidorSchema = commonSchema;

const distribuidorCreateSchema = distribuidorSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const distribuidorUpdateSchema = distribuidorCreateSchema.partial();

export {
  distribuidorSchema,
  distribuidorCreateSchema,
  distribuidorUpdateSchema,
};
