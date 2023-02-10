import { Router } from 'express';
import {LaunchController} from '../controllers/LaunchController.js';

export const LaunchRouter = Router();

LaunchRouter.get('/launch', LaunchController.getLaunchList);
LaunchRouter.get('/launch/:id', LaunchController.getLaunchById);
LaunchRouter.post('/launch', LaunchController.insertLaunch);
LaunchRouter.put('/launch/:id', LaunchController.updateLaunch);
LaunchRouter.delete('/launch/:id', LaunchController.deleteLaunch);
