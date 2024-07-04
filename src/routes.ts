import { Router } from 'express';

import { sportsActivityRouter } from './models/sports/sports.routes';

const router = Router();

router.use('/sportsactivity', sportsActivityRouter);

export { router };
