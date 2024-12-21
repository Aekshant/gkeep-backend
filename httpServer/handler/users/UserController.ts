// controllers/UserController.ts
import { Request, Response } from "express";
import { GetUserDto } from "../../../domain/dto/user.dto";

export interface UserController {
  getAllUserData(req: Request, res: Response): Promise<void>;
}

export interface UserService {
  getAllUser(): Promise<GetUserDto[]>;
}

export class UserControllerImpl implements UserController {
  private service: UserService;

  constructor(service: UserService) {
    this.service = service; // Inject the service
  }

  async getAllUserData(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.service.getAllUser();
      res.status(200).json({
        data,
        err: null,
        success: true
      });
    } catch (error) {
      res.status(500).json({
        data: null,
        err: error.message,
        success: false
      });
    }
  }
}
