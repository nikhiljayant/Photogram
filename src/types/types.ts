export interface UserLogIn {
  email: string;
  password: string;
}

export interface UserSignIn extends UserLogIn {
  confirmPassword: string;
}
