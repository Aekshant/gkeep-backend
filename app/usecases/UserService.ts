

import { GetUserDto, UserPayload, UserResponse } from '../../domain/dto/user.dto';

export interface UserService {
  getAllUser(): Promise<GetUserDto[]>;
  createUser( reqBody : UserPayload ): Promise<UserResponse>;
}

export interface UserRepository {
  getAllUsers(): Promise<GetUserDto[]>;
  createUser( reqBody : UserPayload ): Promise<void>;
}

export class UserServiceImpl implements UserService {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async getAllUser(): Promise<GetUserDto[]> {
    return this.repository.getAllUsers();
  }

  async createUser(reqBody : UserPayload): Promise<UserResponse> {
    await this.repository.createUser(reqBody)
    return { "success" : true, "message" : "Success" }
  }
}
