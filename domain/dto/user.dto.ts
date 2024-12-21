export interface UserResponse{
    success: boolean;
    message: string;
}

export interface UserPayload{
    name: string;
    email: string;
    password : string;
};

export interface GetUserDto {
    id: string;
    name: string;
    email: string;
  }