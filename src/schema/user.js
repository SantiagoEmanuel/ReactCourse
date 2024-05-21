import { object, string } from "zod";

const createUserSchema = object({
  username: string().min(3),
  first_name: string().min(3),
  last_name: string().min(3),
  avatar: string().url().optional(true),
  email: string().email(),
  password: string().min(8).max(64),
});

const loginUserSchema = object({
  email: string().email(),
  password: string().min(8).max(64),
});

export function creationValidateUser({ input }) {
  return createUserSchema.safeParse(input);
}

export function loginValidateUser({ input }) {
  return loginUserSchema.safeParse(input);
}
