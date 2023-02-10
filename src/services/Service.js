import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

export class Service {
    #tableName;

    constructor(tableName) {
        this.tableName = tableName
    }
    
    async getRegisterList(){
        try {
            return await prismaClient[this.tableName].findMany();
        } catch (error) {
            throw new Error(error);
        };
    };

    async getRegisterById(id){
        try {
            return await prismaClient[this.tableName].findUnique({
                where: { id: id }
            });
        } catch (error) {
            throw new Error(error);
        };
    };

    async insertNewRegister(newRegister) {
        try {
            return await prismaClient[this.tableName].create({
                data: { 
                    ...newRegister
                }
            });
        } catch (error) {
            throw new Error(error);
        };
    };

    async updateRegister(id, newData) {
        try {
            return await prismaClient[this.tableName].update({
                where: { id: id },
                data: { 
                    ...newData
                }
            });
        } catch (error) {
            throw new Error(error);
        };
    };

    async deleteRegister(id) {
        try {
            return await prismaClient[this.tableName].delete({
                where: { id: id },
            });
        } catch (error) {
            throw new Error(error);
        };
    };
}