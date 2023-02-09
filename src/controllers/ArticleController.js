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

    static async getArticleById(req, res) {
        try {
            const { id } = req.params;
            const result = await ArticleService.getArticleById(id);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };

    static async insertArticle(req, res) {
        try {
            const newArticle = req.body;
            const result = await ArticleService.insertArticle(newArticle);
            console.log(result);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };

    static async updateArticle(req, res) {
        try {
            const { id } = req.params;
            const newData = req.body;
            const result = await ArticleService.updateArticle(id, newData);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };

    static async deleteArticle(req, res) {
        try {
            const { id } = req.params;
            const result = await ArticleService.deleteArticle(id);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        };
    }
};