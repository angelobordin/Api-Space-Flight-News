import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

export class ArticleService {
    static async getArticlesList(){
        try {
            return await prismaClient.article.findMany({include: {
                events: 1,
                launches: 1
            }});
        } catch (error) {
            throw new Error(error);
        };
    };

    static async getArticleById(id) {
        try {
            return await prismaClient.article.findFirst({
                where: {
                    id: 1
                }
            });
        } catch (error) {
            throw new Error(error);
        };
    };

    static async insertArticle(newArticle) {
        try {
            return await prismaClient.article.create(newArticle);
        } catch (error) {
            throw new Error(error);
        };
    };

    static async updateArticle(id) {
        try {
            return await prismaClient.article.update(id);
        } catch (error) {
            throw new Error(error);
        };
    };

    static async deleteArticle(id) {
        try {
            return await prismaClient.article.delete(id);
        } catch (error) {
            throw new Error(error);
        };
    };
};