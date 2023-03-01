export interface Login {
  username: string;
  password: string;
}

export interface Tokens {
  accessToken: string;
}

export interface requestReset {
  email: string;
}

export interface resetPassword {
  code: string;
  password: string;
  confirm_password?: string;
}

export interface SignUp {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  password: string;
  date_of_birth: string;
  code: string;
}
