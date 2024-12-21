

import { GetUserDto } from '../../domain/dto/user.dto';

export interface UserService {
  getAllUser(): Promise<GetUserDto[]>;
}

export interface UserRepository {
  getAllUsers(): Promise<GetUserDto[]>;
}

export class UserServiceImpl implements UserService {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async getAllUser(): Promise<GetUserDto[]> {
    return this.repository.getAllUsers();
  }
}
