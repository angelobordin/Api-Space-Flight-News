import { LaunchService } from "../services/LaunchService.js";

const service = new LaunchService('launch');

export class LaunchController {
    static async getLaunchList(req, res) {
        try {
            const result = await service.getRegisterList();
            return res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error.message);
        };
    };

    static async getLaunchById(req, res) {
        try {
            const { id } = req.params;
            const result = await service.getRegisterById(id);
            return res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error.message);
        };
    };
    
    static async insertLaunch(req, res) {
        try {
            const newLaunch = req.body;
            console.log(newLaunch)
            const result = await service.insertNewRegister(newLaunch);
            return res.status(200).json(result); 
        } catch (error) {
            res.status(500).json(error.message);
        };
    };
        
    static async updateLaunch(req, res) {
        try {
            const { id } = req.params;
            const newData = req.body;
            const result = await service.updateRegister(id, newData)
            return res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error.message);
        };
    };
            
    static async deleteLaunch(req, res) {
        try {
            const { id } = req.params;
            const result = await service.deleteRegister(id);
            return res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error.message);
        };
    };
}