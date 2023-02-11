import { Router } from 'express';
import {UserController} from '../controllers/UserController.js';

export const UserRouter = Router();

UserRouter.get('/user', UserController.getUserList);
UserRouter.get('/user/:id', UserController.getUserById);
UserRouter.post('/user', UserController.insertUser);
UserRouter.put('/user/:id', UserController.updateUser);
UserRouter.delete('/user/:id', UserController.deleteUser);
