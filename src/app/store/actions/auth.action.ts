import { createAction, props } from '@ngrx/store';
import * as fromAuthInterface from '../../interfaces/auth.interface';

export const LOGIN_START = '[Auth] login Start';
export const LOGIN_SUCCESS = '[Auth] login Success';
export const LOGIN_FAIL = '[Auth] login Fail';

export const SIGNUP_START = '[Auth] signup Start';
export const SIGNUP_SUCCESS = '[Auth] signup Success';
export const SIGNUP_FAIL = '[Auth] signup Fail';

export const REQUEST_RESET_START = '[Auth] requestReset Start';
export const REQUEST_RESET_SUCCESS = '[Auth] requestReset Success';
export const REQUEST_RESET_FAIL = '[Auth] requestReset Fail';

export const RESET_PASSWORD_START = '[Auth] resetPassword Start';
export const RESET_PASSWORD_SUCCESS = '[Auth] resetPAssword Success';
export const RESET_PASSWORD_RESET_FAIL = '[Auth] resetPassword Fail';

export const loginStart = createAction(
  LOGIN_START,
  props<{ params: fromAuthInterface.Login }>()
);
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{ user: any }>());

export const signupStart = createAction(
  SIGNUP_START,
  props<{ params: fromAuthInterface.SignUp }>()
);
export const signupSuccess = createAction(SIGNUP_SUCCESS, props<{ user: any }>());

export const requestResetStart = createAction(
  REQUEST_RESET_START,
  props<{ params: fromAuthInterface.requestReset }>()
);

export const requestResetSuccess = createAction(
  REQUEST_RESET_SUCCESS,
  props<{ user: any }>()
);

export const resetPasswordStart = createAction(
  RESET_PASSWORD_START,
  props<{ params: fromAuthInterface.resetPassword }>()
);

export const resetPasswordSuccess = createAction(
  RESET_PASSWORD_SUCCESS,
  props<{ user: any }>()
);
