// controllers/UserController.ts
import { Request, Response } from "express";

import { GetUserDto, UserPayload, UserResponse, UserLogin } from "../../../domain/dto/user.dto";
import { HashText } from "../../helper/HashData.helper"

export interface UserController {
  getAllUserData(req: Request, res: Response): Promise<void>;
  createUserData(req: Request, res: Response): Promise<void>;
  loginUser(req: Request, res: Response): Promise<void>;
}

export interface UserService {
  getAllUser(): Promise<GetUserDto[]>;
  createUser( reqBody : UserPayload ): Promise<UserResponse<null>>;
  loginUser(reqBody: UserLogin): Promise<UserResponse<GetUserDto | null>>;
}

export class UserControllerImpl implements UserController {
  private service: UserService;
  private hashImpText: HashText;

  constructor(service: UserService) {
    this.service = service;
    this.hashImpText = new HashText();
  }

  async getAllUserData(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.service.getAllUser();
      res.status(200).json({ data, "message": "Success", success: true
      });
    } catch (error) {
      res.status(500).json({ data: null, "message": error.message, success: false});
    }
  }

  async createUserData(req: Request, res: Response): Promise<void> {
    try {
      const reqBody : UserPayload = req.body
      reqBody.password = await this.hashImpText.hashPassword(reqBody.password);
      const data = await this.service.createUser(reqBody);
      res.status(200).json({ "message": null, ...data });
    } catch (error) {
      res.status(500).json({ "message": error.message, "success": false });
    }
  }

  async loginUser( req: Request, res: Response ): Promise<void>{
    try {
      const reqBody : UserLogin = req.body
      const data : UserResponse<GetUserDto | null> = await this.service.loginUser(reqBody);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ "message": "Internal Server Error", "success": false,  });
    }
  }
}
