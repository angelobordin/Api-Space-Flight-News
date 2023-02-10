import { Router } from 'express';
import {EventController} from '../controllers/EventController.js';

export const EventRouter = Router();

EventRouter.get('/event', EventController.getEventList);
EventRouter.get('/event/:id', EventController.getEventById);
EventRouter.post('/event', EventController.insertEvent);
EventRouter.put('/event/:id', EventController.updateEvent);
EventRouter.delete('/event/:id', EventController.deleteEvent);
