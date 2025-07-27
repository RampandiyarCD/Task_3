import { logger } from "../config/logger.js";
import { generateToken } from "../middleware/authMiddleware.js";
import {
  loginService,
  userCreateService,
  userDeleteService,
  userGetByIdService,
  userGetService,
  userUpdateService,
} from "../service/userService.js";

export const createUser = async (req, res) => {
  try {
    const userData = await userCreateService(req.body);
    if (userData?.error) {
      logger.error({ error: userData.error });
      return res.status(404).json({ error: userData.error });
    }
    logger.info("User Created Successfully", { userData });
    return res.status(201).json({ user: "User Created Successfully" });
  } catch (error) {
    logger.error("Server Error:", error);
    return res.status(500).json({ error: userData.error });
  }
};

export const getUser = async (req, res) => {
  try {
    const users = await userGetService();
    if (users?.error) {
      logger.error({ error: users.error });
      return res.status(404).json({ error: users.error });
    }
    logger.info("Users retrieved successfully", { users });
    return res.status(200).json({ users });
  } catch (error) {
    logger.error("Internal Server Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const userId = await userGetByIdService(req.params.userId);

    if (userId?.error) {
      logger.error({ error: userId.error });
      return res.status(404).json({ error: userId.error });
    }

    logger.info("User retrieved successfully", { userId });
    return res.status(200).json({ userId });
  } catch (error) {
    logger.error("Internal Server Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = await userUpdateService(req.params.userId, req.body);

    if (userId?.error) {
      logger.error({ error: userId.error });
      return res.status(404).json({ error: userId.error });
    }

    logger.info("User updated successfully", { userId });
    return res.status(200).json({ userId });
  } catch (error) {
    logger.error("Internal Server Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = await userDeleteService(req.params.userId);

    if (userId?.error) {
      logger.error({ error: userId.error });
      return res.status(404).json({ error: userId.error });
    }

    logger.info("User deleted successfully", { userId });
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    logger.error("Internal Server Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const loginData = await loginService(req.body.userId, req.body.password);

    if (loginData?.error) {
      logger.error({ error: loginData.error });
      return res.status(404).json({ error: loginData.error });
    }
    const token = await generateToken({ loginData });

    logger.info("Login successful", { loginData });
    return res.status(200).json({
      message: "Login Successfully",
      user: loginData,
      token: token,
    });
  } catch (error) {
    logger.error("Internal Server Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
