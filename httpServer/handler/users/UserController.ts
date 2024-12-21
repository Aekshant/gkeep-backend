// controllers/UserController.ts
import { Request, Response } from "express";
import { GetUserDto, UserPayload, UserResponse } from "../../../domain/dto/user.dto";

export interface UserController {
  getAllUserData(req: Request, res: Response): Promise<void>;
  createUserData(req: Request, res: Response): Promise<void>;
}

export interface UserService {
  getAllUser(): Promise<GetUserDto[]>;
  createUser( reqBody : UserPayload ): Promise<UserResponse>;
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

  async createUserData(req: Request, res: Response): Promise<void> {
    try {
      const reqBody : UserPayload = req.body
      const data = await this.service.createUser(reqBody);
      res.status(200).json({
        err: null,
        ...data
      });
    } catch (error) {
      res.status(500).json({
        err: error.message,
        success: false
      });
    }
  }
}
