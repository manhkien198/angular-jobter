export interface FormValue {
  name?: string;
  username: string;
  password: string;
}
export interface ResponseLogin {
  user: User;
}

export class User {
  email?: string;
  lastName?: string;
  location?: string;
  name?: string;
  token?: string;
}
export interface LoginPayload {
  email: string;
  password: string;
}
