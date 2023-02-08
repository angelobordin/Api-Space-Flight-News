import { Router } from 'express';
export const ArticleRouter = Router();
ArticleRouter.get('/articles', (req, res) => {
    return res.json('Retorno desse caralho');
});
