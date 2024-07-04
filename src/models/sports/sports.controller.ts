import { Request, Response } from 'express';
import { SportsActivityRepository } from './sports.repository';
import { SportsActivityService } from './sports.service';

const sportsActivityRepository = new SportsActivityRepository();
const sportsActivityService = new SportsActivityService();

export class SportsActivityController {
    async findAll(request: Request, response: Response) {}
}
