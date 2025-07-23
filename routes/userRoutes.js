import { createUser, deleteUser, getUser, getUserById, updateUser } from "../controller/userController.js";
import { Router } from 'express';

const routes = new Router();


routes.post('/', createUser);
routes.get('/', getUser);
routes.get('/:userId', getUserById);
routes.put('/:userId', updateUser);
routes.delete('/:userId', deleteUser)

export default routes;