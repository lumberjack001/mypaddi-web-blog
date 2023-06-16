import { loginSuccess, requestResetSuccess, resetPasswordSuccess } from '../actions/auth.action';
import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/auth.state';

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(requestResetSuccess, (state, action) => {
    return {
      ...state,
      resetRequestData: action.data
    }
  }),
  on(resetPasswordSuccess, (state, action) => {
    return {
      ...state,
      resetPasswordData: action.data
    }
  })
);

export function AuthReducer(state: any, action: any) {
  return _authReducer(state, action);
}
