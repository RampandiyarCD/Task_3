import { createUser, getUser, getUserById, updateUser } from "../controller/userController.js";
import { Router } from 'express';

const routes = new Router();


routes.post('/create', createUser);
routes.get('/get', getUser);
routes.get('/get/:userId', getUserById);
routes.put('/:userId', updateUser);

export default routes;