import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

export class ArticleService {
    static async getArticlesList(){
        try {
            return await prismaClient.article.findMany({
                include: {
                    events: 1,
                    launches: 1
                }
            });
        } catch (error) {
            throw new Error(error);
        };
    };

    static async getArticleById(id) {
        try {
            return await prismaClient.article.findUnique({
                where: { id: Number(id) },
                include: {
                    events: 1,
                    launches: 1
                }
            });
        } catch (error) {
            throw new Error(error);
        };
    };

    static async insertArticle(newArticle) {
        try {
            return await prismaClient.article.create({
                data: { 
                    ...newArticle
                }
            });
        } catch (error) {
            throw new Error(error);
        };
    };

    static async updateArticle(id, newData) {
        try {
            return await prismaClient.article.update({
                where: { id: Number(id) },
                data: { 
                    ...newData
                }
            });
        } catch (error) {
            throw new Error(error);
        };
    };

    static async deleteArticle(id) {
        try {
            return await prismaClient.article.delete({
                where: { id: Number(id) },
            });
        } catch (error) {
            throw new Error(error);
        };
    };
};