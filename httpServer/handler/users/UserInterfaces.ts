import { Request, Response } from 'express';

export interface UserControllerInterface {
  getAllUserData(req: Request, res: Response): Promise<void>;
}