import { Service } from "./Service.js";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export class ArticleService extends Service {

    constructor(tableName) {
        super(tableName)
    };

    async getArticlesList(){
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

    async getArticleById(id) {
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

    async getEventList(articleId){
        try {
            return await prismaClient.event.findMany({
                where: { articleId: articleId }
            });
        } catch (error) {
            throw new Error(error);
        };
    };

    async getLaunchList(articleId) {
        try {
            return await prismaClient.launch.findMany({
                where: { articleId: articleId }
            });
        } catch (error) {
            throw new Error(error);
        };
    }
    
};