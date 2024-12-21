// services/UserServiceInterface.ts
import { GetUserDto } from '../../domain/dto/user.dto';

export interface UserServiceInterface {
  getAllUser(): Promise<GetUserDto[]>;
}
