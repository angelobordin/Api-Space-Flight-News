import { Router } from 'express';
import {ArticleController} from '../controllers/ArticleController.js';

export const ArticleRouter = Router();

ArticleRouter.get('/articles', ArticleController.getArticlesList);
