import { genrateToken } from "../middleware/authMiddleware.js";
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
      return res.status(404).json({ error: userData.error });
    }

    return res.status(201).json(userData);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await userGetService();
    if (user?.error) {
      return res.status(404).json({ error: user.error });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const userId = await userGetByIdService(req.params.userId);

    if (userId?.error) {
      return res.status(404).json({ error: userId.error });
    }

    return res.status(200).json(userId);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = await userUpdateService(req.params.userId, req.body);

    if (userId) {
      return res.status(404).json({ error: userId.error });
    }

    return res.status(200).json(userId);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = await userDeleteService(req.params.userId);

    if (userId?.error) {
      return res.status(404).json({ error: userId.error });
    }

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const loginData = await loginService(req.body.userId, req.body.password);

    if (loginData?.error) {
      return res.status(404).json({ error: loginData.error });
    }
    const token = await genrateToken(loginData);

    return res.status(200).json({
      message: "Login Successfully",
      user: loginData,
      token: token,
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
