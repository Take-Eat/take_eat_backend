import { z } from "zod";

const usersSchema = z.object({
  id: z.number(),
  name: z.string().min(3).max(255),
  username: z.string().min(3).max(23),
  role: z.enum(["admin", "apoiador", "doador", "distribuidor", "entregador"]),
  image: z.string().nullish(),
  phone: z.string().max(11),
  email: z.string().email().max(55),
  password: z.string().min(6).max(120),
  isTermAccepted: z.boolean().default(false),
  resetPasswordToken: z.string().nullable(),
  resetPasswordExpires: z.date().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullable(),
});

const usersWithoutPassSchema = usersSchema.omit({
  password: true,
  resetPasswordToken: true,
  resetPasswordExpires: true,
});

const usersCreateSchema = usersSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
  resetPasswordToken: true,
  resetPasswordExpires: true,
});

const usersUpdateSchema = usersCreateSchema.partial().omit({
  role: true,
});

export {
  usersSchema,
  usersWithoutPassSchema,
  usersCreateSchema,
  usersUpdateSchema,
};
