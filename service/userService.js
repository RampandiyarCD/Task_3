import { Op } from "sequelize";
import User from "../model/user.js";
import bcrypt from "bcrypt";

const saltRound = 15;

export const userCreateService = async (userData) => {
  const hashing = await bcrypt.hash(userData.password, saltRound);
  userData.password = hashing;
  const [user, created] = await User.findOrCreate({
    where: {
      [Op.or]: [{ userId: userData.userId }, { phone: userData.phone }],
    },
    defaults: userData,
  });

  if (!created) {
    return { error: "User already exists" };
  }
  return user;
};

export const userGetService = async () => {
  const users = await User.findAll();
  if (users.length === 0) {
    return { error: "No Users Found" };
  }
  return users;
};

export const userGetByIdService = async (userId) => {
  const user = await User.findByPk(userId);
  if (!user) {
    return { error: "User Not Found" };
  }
  return user;
};

export const userUpdateService = async (userId, userData) => {
  const user = await User.findByPk(userId);
  if (!user) {
    return { error: "User Not Found" };
  }
  await user.update(userData);
  return { user };
};

export const userDeleteService = async (userId) => {
  const user = await User.findByPk(userId);
  if (!user) {
    return { error: "User Not Found" };
  }
  await user.destroy();
  return user;
};

export const loginService = async (userId, password) => {
  const user = await User.findOne({
    where: { userId },
  });

  if (!user) {
    return { error: "User does not Exists" };
  }

  const isPassword = await bcrypt.compare(password, user.password);

  if (!isPassword) {
    return { error: "Invalid Password" };
  }

  return user;
};
