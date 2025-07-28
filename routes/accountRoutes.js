import {
  createAccount,
  deleteAccount,
  getAccount,
  getAccountById,
  tranferAmount,
  updateAccount,
} from "../controller/accountController.js";
import { Router } from "express";
import { auth } from "../middleware/authMiddleware.js";

const routes = new Router();

routes.post("/", auth, createAccount);
routes.get("/", auth, getAccount);
routes.get("/:accId", auth, getAccountById);
routes.put("/:accId", auth, updateAccount);
routes.delete("/:accId", auth, deleteAccount);

routes.put("/:accId/:accId2", auth, tranferAmount);

export default routes;
