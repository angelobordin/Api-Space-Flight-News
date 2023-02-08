import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

export class ArticleService {
    static async getArticlesList(){
        try {
            return await prismaClient.article.findMany({});
        } catch (error) {
            throw new Error(error);
        };
    };
};