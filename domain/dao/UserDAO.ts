import { User } from './User';

export interface UserDAO {
  getUserById(id: string): Promise<User | null>;
  getAllUsers(): Promise<User[]>;
  createUser(user: User): Promise<User>;
  updateUser(id: string, user: User): Promise<User | null>;
  deleteUser(id: string): Promise<boolean>;
}
