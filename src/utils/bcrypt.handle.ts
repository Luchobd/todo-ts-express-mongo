import { hash, compare } from "bcryptjs";

export const encrypt = async (password: string) => {
  const passwordHash = await hash(password.toString(), 8);
  return passwordHash;
};

export const verified = async (password: string, passwordHash: string) => {
  const isCorrect = await compare(password.toString(), passwordHash);
  return isCorrect;
};