import {
  createUser,
  deleteUser,
  getUser,
  getUserById,
  login,
  updateUser,
} from "../controller/userController.js";
import { Router } from "express";
import { auth } from "../middleware/authMiddleware.js";

const routes = new Router();

routes.post("/", createUser);
routes.get("/", getUser);
routes.get("/:userId", auth, getUserById);
routes.put("/:userId", updateUser);
routes.delete("/:userId", deleteUser);

//loginroute
routes.post("/login", login);

export default routes;
