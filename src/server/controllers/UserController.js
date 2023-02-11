import { UserService } from '../services/UserService.js'
const service = new UserService('user');

export class UserController {
    static async getUserList(req, res) {
        try {
            console.log("getUserList");
            const result = await service.getRegisterList();
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };

    static async getUserById(req, res) {
        try {
            const { id } = req.params;
            const result = await service.getRegisterById(Number(id));
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };

    static async insertUser(req, res) {
        try {
            const newUser = req.body;
            const result = await service.insertNewRegister(newUser);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };
  
    static async updateUser(req, res) {
        try {
            const { id } = req.params;
            const newData = req.body;
            const result = await service.updateRegister(Number(id), newData);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };

    static async deleteUser(req, res) {
        try {
            const { id } = req.params;
            const result = await service.deleteRegister(Number(id));
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };
}