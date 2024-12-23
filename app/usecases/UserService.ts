import bcrypt from "bcrypt";
import {
  GetUserDto,
  UserPayload,
  UserResponse,
  UserLogin,
  UserLoginResponse
} from "../../domain/dto/user.dto";

export interface UserService {
  getAllUser(): Promise<GetUserDto[]>;
  createUser(reqBody: UserPayload): Promise<UserResponse<null>>;
  loginUser(reqBody: UserLogin): Promise<UserLoginResponse<GetUserDto>>;
}

export interface UserRepository {
  getAllUsers(): Promise<GetUserDto[]>;
  createUser(reqBody: UserPayload): Promise<void>;
  loginUser(reqBody: UserLogin): Promise<UserResponse<GetUserDto | null>>;
}

export class UserServiceImpl implements UserService {
  private repository: UserRepository; 

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async getAllUser(): Promise<GetUserDto[]> {
    return this.repository.getAllUsers();
  }

  async createUser(reqBody: UserPayload): Promise<UserResponse<null>> {
    await this.repository.createUser(reqBody);
    return { success: true, message: "Success", data: null };
  }

  async loginUser(reqBody: UserLogin): Promise<UserLoginResponse<GetUserDto>> {
    const data: UserResponse<GetUserDto | null> = await this.repository.loginUser(reqBody);
    return {
      data: data.data,
      message: data.message,
      success: data.success,
      token: ""
    };
  }
}
