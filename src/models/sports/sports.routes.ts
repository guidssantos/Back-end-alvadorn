import { Router } from 'express';
import { routeAdapter } from '../../utils/routerAdapter';
import { SportsActivityController } from './sports.controller';

const sportsActivityRouter = Router();
const sportsActivityController = new SportsActivityController();

sportsActivityRouter.get('/', routeAdapter(sportsActivityController.findAll));
sportsActivityRouter.delete('/:id', routeAdapter(sportsActivityController.delete));
sportsActivityRouter.get('/:id', routeAdapter(sportsActivityController.findById));
sportsActivityRouter.post('/:id', routeAdapter(sportsActivityController.create));
sportsActivityRouter.put('/:id', routeAdapter(sportsActivityController.update));

export { sportsActivityRouter };
