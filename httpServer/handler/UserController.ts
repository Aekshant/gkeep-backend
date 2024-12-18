// httpServer/handler/UserController.ts
import { Request, Response } from 'express';
import { UserService } from '../../app/usecases/UserService';
import { User } from '../../domain/dao/User';

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    const user = await this.userService.getUserById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    const users = await this.userService.getAllUsers();
    res.json(users);
  }

  async createUser(req: Request, res: Response): Promise<void> {
    const user: User = req.body;
    if (!user.name || !user.email || !user.password) {
      res.status(400).send('Name, email, and password are required');
      return;
    }
    const newUser = await this.userService.createUser(user);
    res.status(201).json(newUser);
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    const user: User = req.body;
    const updatedUser = await this.userService.updateUser(req.params.id, user);
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).send('User not found');
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    const deleted = await this.userService.deleteUser(req.params.id);
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).send('User not found');
    }
  }
}
