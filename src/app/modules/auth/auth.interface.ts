import { Model } from "mongoose";
export type TUser = {
  _id?: string;
  name: string;
  email: string;
  password: string;
};

export type TLoginUser = Pick<TUser, "email" | "password">;

export interface IUserModel extends Model<TUser> {
  isUserExistsByEmail(id: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
