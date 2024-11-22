import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TLoginUser, TUser } from "./auth.interface";
import { Auth } from "./auth.model";
import { createToken } from "../../utils/jwtVerification";
import config from "../../config";

const createUserIntoDb = async (payload: TUser) => {
  const user = await Auth.create(payload);

  return user;
};

const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist in our data base
  const user = await Auth.isUserExistsByEmail(payload?.email);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User is not found!");
  }

  //checking if the password is correct

  if (!(await Auth.isPasswordMatched(payload?.password, user?.password)))
    throw new AppError(httpStatus.FORBIDDEN, "Password do not matched");

  // jwt payload for create access and refresh token
  const jwtPayload = {
    _id: user._id!,
    name: user.name,
    email: user.email,
  };

  // create access token and send it to the client
  const accessToken = createToken(
    jwtPayload,
    config.access_secret as string,
    config.access_expires_in as string,
  );

  return {
    accessToken,
  };
};

export const AuthServices = {
  createUserIntoDb,
  loginUser,
};
