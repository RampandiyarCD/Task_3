import { Router } from "express";
import {
  createStatement,
  deleteStatement,
  getStatementById,
  getStatements,
  updateStatement,
} from "../controller/statementController.js";

const routes = new Router();

routes.post("/", createStatement);
routes.get("/", getStatements);
routes.get("/:accId", getStatementById);
routes.put("/:accId", updateStatement);
routes.delete("/:accId", deleteStatement);

export default routes;
