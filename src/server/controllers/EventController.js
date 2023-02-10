import { EventService } from '../services/EventService.js';

const service = new EventService('event');

export class EventController {
    static async getEventList(req, res) {
        try {
            const result = await service.getRegisterList();
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };

    static async getEventById(req, res) {
        try {
            const { id } = req.params;
            const result = await service.getRegisterById(id);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };

    static async insertEvent(req, res) {
        try {
            const newRegister = req.body;
            const result = await service.insertNewRegister(newRegister)
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };

    static async updateEvent(req, res) {
        try {
            const { id } = req.params;
            const newData = req.body;
            const result = await service.updateRegister(id, newData);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };

    static async deleteEvent(req, res) {
        try {
            const { id } = req.params;
            const result = await service.deleteRegister(id);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };
};