import { encrypt, verified } from "../utils/bcrypt.handle";
import UserModel from "../models/user";
import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import { generateToken } from "../utils/jwt.handle";
import { sendEmail } from "../config/emailer";
import { v4 as uuidv4 } from "uuid";

export const register = async (user: User) => {
  const { email, password, firstname, lastname } = user;
  const userFound = await UserModel.findOne({ email });
  if (userFound) return "User already exists";

  await sendEmail({
    type: "register",
    name: firstname + " " + lastname,
    email,
  });
  const passHash = await encrypt(password);
  const newUser = UserModel.create({ ...user, password: passHash });
  return newUser;
};

export const login = async ({ email, password }: Auth) => {
  const userFound = await UserModel.findOne({ email });
  if (!userFound) return "User not found";

  const isCorrect = await verified(password, userFound.password);
  if (!isCorrect) return "Password is incorrect";

  const token = generateToken(userFound.email);

  const data = {
    token,
    user: userFound,
  };

  return data;
};

export const sendPassChangeEmail = async (user: User) => {
  const { email } = user;
  const userFound = await UserModel.findOne({ email });
  if (!userFound) return "User not Exists!!";

  const temporaryVerificationKey: string | undefined = uuidv4()
    .split("-")
    .shift();
  const password = await encrypt(temporaryVerificationKey!);

  const updatePasswordDBRadom = await UserModel.findByIdAndUpdate(
    { _id: userFound._id },
    { password },
    { new: true }
  );
  if (!updatePasswordDBRadom) return "Error in update password";

  await sendEmail({ type: "forgotten", email, key: temporaryVerificationKey });

  return updatePasswordDBRadom;
};

export const forgotPassword = async (user: User) => {
  const { email, password, validationKey } = user;

  const userFound = await UserModel.findOne({ email });

  if (!userFound) return "Email does not exist!";

  if (await verified(validationKey, userFound.password)) {
    const passHash = await encrypt(password);
    const newUser = UserModel.findOneAndUpdate(
      { _id: userFound._id },
      { password: passHash },
      { new: true }
    );

    sendEmail({ type: "change", email });

    return newUser;
  } else {
    return "Verification code entered is incorrect!";
  }
};
