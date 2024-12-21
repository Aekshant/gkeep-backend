// infra/UserRepository.ts
import { GetUserDto } from '../../domain/dto/user.dto';

export interface UserRepository {
  getAllUsers(): Promise<GetUserDto[]>;
}

export class UserRepositoryImpl implements UserRepository {
  async getAllUsers(): Promise<GetUserDto[]> {
    // Replace this mock data with actual database calls
    return [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
      { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
    ];
  }
}
