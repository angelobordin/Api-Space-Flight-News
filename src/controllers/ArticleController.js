import { ArticleService } from "../services/ArticleService.js";

export class ArticleController {
    static async getArticlesList(req, res) {
        try {
            const result = await ArticleService.getArticlesList()
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };
};