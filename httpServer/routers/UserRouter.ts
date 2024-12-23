
import { Router } from 'express';
import { UserDependencyInjector } from '../../dependancyInjector/user.di';

const UserRouter = Router();
const userController = UserDependencyInjector.getUserController();

UserRouter.get('/', (req, res) => userController.getAllUserData(req, res));
UserRouter.post('/', (req, res) => userController.createUserData(req, res));
UserRouter.post('/login', (req, res) => userController.loginUser(req, res));

export { UserRouter };
