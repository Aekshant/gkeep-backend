export class UserResponse {
    name: string;
    email: string;
}

export type payload = {
    id: string;
};

export interface GetUserDto {
    id: number;
    name: string;
    email: string;
  }