import { Service } from "./Service.js";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export class UserService extends Service {

    constructor(tableName) {
        super(tableName)
    };

    async getUserByEmail(email) {
        try {
            return await prismaClient.user.findUnique({
                where: {
                    email: email
                }
            });
        } catch (error) {
            throw new Error(error);
        };
    };
}