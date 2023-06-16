export interface AuthState {
  user: any;
  resetRequestData: any;
  resetPasswordData: any;

}

export const initialState: AuthState = {
  user: null,
  resetRequestData: null,
  resetPasswordData: null
};
