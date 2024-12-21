// infra/UserRepository.ts
import { GetUserDto, UserPayload } from '../../domain/dto/user.dto';
import { Repository } from 'typeorm';
import { AppDataSource } from './config/data-source';
import { User } from '../../domain/models/User';
export interface UserRepository {
  getAllUsers(): Promise<GetUserDto[]>;
  createUser( reqBody : UserPayload ): Promise<void>;
}

export class UserRepositoryImpl implements UserRepository {
  private readonly repository: Repository<User>;
  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }
  
  async getAllUsers(): Promise<GetUserDto[]> {
    const users = await this.repository.find();
    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));
  }

  async createUser( reqBody : UserPayload ): Promise<void>{
    const user = new User()
    user.email = reqBody.email
    user.name = reqBody.name
    user.password = reqBody.password
    await this.repository.save(user)
  }
}
