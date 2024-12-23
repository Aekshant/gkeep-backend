// infra/UserRepository.ts
import {
  GetUserDto,
  UserPayload,
  UserLogin,
  UserResponse
} from "../../domain/dto/user.dto";
import { Repository } from "typeorm";
import { AppDataSource } from "./config/data-source";
import { User } from "../../domain/models/User";
export interface UserRepository {
  getAllUsers(): Promise<GetUserDto[]>;
  createUser(reqBody: UserPayload): Promise<void>;
  loginUser(reqBody: UserLogin): Promise<UserResponse<GetUserDto | null>>;
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
      email: user.email
    }));
  }

  async createUser(reqBody: UserPayload): Promise<void> {
    const user = new User();
    user.email = reqBody.email;
    user.name = reqBody.name;
    user.password = reqBody.password;
    await this.repository.save(user);
  }
  async loginUser(
    reqBody: UserLogin
  ): Promise<UserResponse<GetUserDto | null>> {
    const data : User | null = await this.repository.findOne({
      where: { email: reqBody["email"] }
    });
    
    if (!data) return { success: false, message: "User Not Found", data: null };

    const useData = { 
      "id" : data["id"],
      "name" : data["name"],
      "email" : data["email"],
    }
    return { success: true, message: "Success", "data": useData };
  }
}
