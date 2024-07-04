import { Request, Response } from 'express';
import { SportsActivityRepository } from './sports.repository';
import { SportsActivityService } from './sports.service';

const sportsActivityRepository = new SportsActivityRepository();
const sportsActivityService = new SportsActivityService();

export class SportsActivityController {
    async findAll(request: Request, response: Response) {
        const content = await sportsActivityService.findAll(sportsActivityRepository);

        return response.status(content?.length === 0 ? 204 : 200).json(content);
    }

    async findById(request: Request, response: Response) {
        const content = await sportsActivityService.findById(
            sportsActivityRepository,
            request.params.id
        );
        return response.status(content?.length === 0 ? 204 : 200).json(content);
    }

    async create(request: Request, response: Response) {
        const content = await sportsActivityService.create(sportsActivityRepository, request.body);
        return response.status(201).json(content);
    }

    async update(request: Request, response: Response) {
        const content = await sportsActivityService.update(
            sportsActivityRepository,
            request.params.id,
            request.body
        );
        return response.status(200).json(content);
    }

    async delete(request: Request, response: Response) {
        const content = await sportsActivityService.delete(
            sportsActivityRepository,
            request.params.id
        );
        return response.status(200).json(content);
    }
}
