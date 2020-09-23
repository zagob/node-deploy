import { Router } from 'express';

import SessionController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessionController = new SessionController();

// POST http://localhost:3333/appointments
sessionsRouter.post('/', sessionController.create);

export default sessionsRouter;