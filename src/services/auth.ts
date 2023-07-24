import { encrypt, verifed } from "../utils/bcrypt.handle";
import UserModel from "../models/user";
import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import { generateToken } from "../utils/jwt.handle";
import { sendEmail } from "../config/emailer";

export const register = async (user: User) => {
  const { email, password, firstname, lastname } = user;
  const userFound = await UserModel.findOne({ email });
  if (userFound) return "User already exists";

  await sendEmail({ type: "register", name: firstname + " " + lastname,  email});
  const passHash = await encrypt(password);
  const newUser = UserModel.create({ ...user, password: passHash });
  return newUser;
};

export const login = async ({ email, password }: Auth) => {
  const userFound = await UserModel.findOne({ email });
  if (!userFound) return "User not found";

  const isCorrect = await verifed(password, userFound.password);
  if (!isCorrect) return "Password is incorrect";

  const token = generateToken(userFound.email);

  const data = {
    token,
    user: userFound,
  };

  return data;
};
