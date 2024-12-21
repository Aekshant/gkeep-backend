// httpServer/routers/MainRouter.ts
import { Router } from 'express';
import { UserRouter } from './routers/UserRouter';

const MainRouter = Router();

MainRouter.use('/users', UserRouter);

export { MainRouter };
