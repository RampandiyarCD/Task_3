import { createAccount, deleteAccount, getAccount, getAccountById, updateAccount } from "../controller/accountController.js";
import { Router } from 'express';

const routes = new Router();

routes.post('/', createAccount);
routes.get('/', getAccount);
routes.get('/:accId', getAccountById);
routes.put('/:accId', updateAccount);
routes.delete('/:accId', deleteAccount)

export default routes;