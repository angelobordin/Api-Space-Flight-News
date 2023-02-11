import { UserService } from '../services/UserService.js'
const service = new UserService('user');

export class UserController {
    static async getUserList(req, res) {
        try {
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
            const result = await service.insertUser(newUser);
            return res.json({status: true, message: "User Registered sucessful"});
        } catch (error) {
            return res.json({status: false, message: error.message});
        };
    };
  
    static async authUser(req, res) {
        try {
            const result = '';
            const { email, password } = req.body;
            let passIsValid = false;

            const user = await service.getUserByEmail(email);
            if (!user) throw new Error(`User ${email} not registered!`);

            passIsValid = (password === user.password) ? true : false;

            if (!passIsValid) throw new Error(`Password is incorrect!`);        

            return res.json({status: true, message: "User login sucessful"});
        } catch (error) {
            return res.json({status: false, message: error.message});
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