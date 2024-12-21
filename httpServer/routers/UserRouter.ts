
import { Router } from 'express';
import { UserDependencyInjector } from '../../dependancyInjector/user.di';

const UserRouter = Router();
const userController = UserDependencyInjector.getUserController();

UserRouter.get('/', (req, res) => userController.getAllUserData(req, res));

export { UserRouter };
