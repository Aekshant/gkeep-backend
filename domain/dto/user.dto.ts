export class UserResponse {
    name: string;
    email: string;
}

export type payload = {
    id: string;
};

export class UserRequest {
    name: string;
    email: string;
    password: string;
}