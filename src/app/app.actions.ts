import { Action } from '@ngrx/store';

export enum AppActionTypes {
  LOGIN = '[App] Login',
  LOGIN_SUCCESS = '[App] Login success',
  LOGIN_FAILED = '[App] Login failed',
}

export class LoginAction implements Action {
  readonly type = AppActionTypes.LOGIN;
}
export class LoginSuccessAction implements Action {
  readonly type = AppActionTypes.LOGIN_SUCCESS;
}

export class LoginFailedAction implements Action {
  readonly type = AppActionTypes.LOGIN_FAILED;
}

export type AppActions = LoginAction | LoginFailedAction | LoginSuccessAction;
