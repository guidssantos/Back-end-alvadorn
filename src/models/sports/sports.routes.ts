import { Router } from 'express';
import { routeAdapter } from '../../utils/routerAdapter';
import { SportsActivityController } from './sports.controller';

const sportsActivityRouter = Router();
const sportsActivityController = new SportsActivityController();

sportsActivityRouter.get('/', routeAdapter(sportsActivityController.findAll));

export { sportsActivityRouter };
