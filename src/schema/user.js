import z from "zod";

const createUserSchema = z.object({
  username: z.string().min(3),
  first_name: z.string().min(3),
  last_name: z.string().min(3),
  avatar: z.string().url().optional().or(z.literal("")),
  email: z.string().email(),
  password: z.string().min(8).max(64),
});

const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(64),
});

export function creationValidateUser({ input }) {
  return createUserSchema.safeParse(input);
}

export function loginValidateUser({ input }) {
  return loginUserSchema.safeParse(input);
}
