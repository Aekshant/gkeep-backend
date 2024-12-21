// dependencyinjector/DependencyInjector.ts
import { UserRepositoryImpl } from '../infra/mysql/UserRepository';
import { UserServiceImpl, UserRepository } from '../app/usecases/UserService';
import { UserControllerImpl, UserService, UserController } from '../httpServer/handler/users/UserController';

export class UserDependencyInjector {
  static getUserRepository(): UserRepository {
    return new UserRepositoryImpl();
  }

  static getUserService(): UserService {
    const userRepository = this.getUserRepository();
    return new UserServiceImpl(userRepository);
  }

  static getUserController(): UserController {
    const userService = this.getUserService();
    return new UserControllerImpl(userService);
  }
}
