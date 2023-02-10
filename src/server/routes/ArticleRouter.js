import { Router } from 'express';
import {ArticleController} from '../controllers/ArticleController.js';

export const ArticleRouter = Router();

ArticleRouter.get('/article', ArticleController.getArticlesList);
ArticleRouter.get('/article/:id', ArticleController.getArticleById);
ArticleRouter.get('/article/:id/events', ArticleController.getEventList);
ArticleRouter.get('/article/:id/launches', ArticleController.getLaunchList);
ArticleRouter.post('/article', ArticleController.insertArticle);
ArticleRouter.put('/article/:id', ArticleController.updateArticle);
ArticleRouter.delete('/article/:id', ArticleController.deleteArticle);
