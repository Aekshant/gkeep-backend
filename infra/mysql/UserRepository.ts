// infra/mysqlRepo/UserRepository.ts
import { AppDataSource } from '../../config/ormconfig';
import { UserDAO } from '../../domain/dao/UserDAO';
import { User } from '../../domain/dao/User';

export class UserRepository implements UserDAO {
  private userRepository = AppDataSource.getRepository(User);

  async getUserById(id: string): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async updateUser(id: string, user: User): Promise<User | null> {
    const existingUser = await this.userRepository.findOneBy({ id });
    if (!existingUser) return null;

    // Update the user fields (you can extend this logic for partial updates)
    existingUser.name = user.name;
    existingUser.email = user.email;
    existingUser.password = user.password;

    return this.userRepository.save(existingUser);
  }

  async deleteUser(id: string): Promise<boolean> {
    const result = await this.userRepository.delete(id);
    return result.affected > 0;
  }
}
