// app/usecases/UserService.ts
import { UserDAO } from '../../domain/dao/UserDAO';
import { User } from '../../domain/dao/User';

export class UserService {
  private userDAO: UserDAO;

  constructor(userDAO: UserDAO) {
    this.userDAO = userDAO;
  }

  async getUserById(id: string): Promise<User | null> {
    return this.userDAO.getUserById(id);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userDAO.getAllUsers();
  }

  async createUser(user: User): Promise<User> {
    return this.userDAO.createUser(user);
  }

  async updateUser(id: string, user: User): Promise<User | null> {
    return this.userDAO.updateUser(id, user);
  }

  async deleteUser(id: string): Promise<boolean> {
    return this.userDAO.deleteUser(id);
  }
}
