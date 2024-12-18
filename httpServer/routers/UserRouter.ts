// httpServer/routers/UserRouter.ts
import { Router } from 'express';
import { UserController } from '../handler/UserController';
import { UserService } from '../../app/usecases/UserService';
import { UserRepository } from '../../infra/mysql/UserRepository';
import { AppDataSource } from '../../config/ormconfig';

const userRouter = Router();

// Initialize repository, service, and controller
AppDataSource.initialize().then(() => {
  const userRepository = new UserRepository();
  const userService = new UserService(userRepository);
  const userController = new UserController(userService);

  userRouter.get('/:id', (req, res) => userController.getUserById(req, res));
  userRouter.get('/', (req, res) => userController.getAllUsers(req, res));
  userRouter.post('/', (req, res) => userController.createUser(req, res));
  userRouter.put('/:id', (req, res) => userController.updateUser(req, res));
  userRouter.delete('/:id', (req, res) => userController.deleteUser(req, res));
});

export default userRouter;