export interface UserResponse<T>{
    success: boolean;
    message: string;
    data : T | null
}

export interface UserPayload{
    name: string;
    email: string;
    password : string;
};


export interface UserLogin{
    email: string;
    password : string;
};

export interface UserLoginResponse<T>{
    success: boolean;
    message: string;
    data : T | null
    token : string | null
};

export interface GetUserDto {
    id: string;
    name: string;
    email: string;
  }