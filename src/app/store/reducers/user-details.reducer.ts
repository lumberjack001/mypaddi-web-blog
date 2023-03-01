import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/user-details.state';

import {
    getUserDetailsSuccess,
    updateUserDetailsSuccess
} from '../actions/user-details.action'

const _userDetailsReducer = createReducer(
    initialState,
    on(getUserDetailsSuccess, (state, action) => {
        return {
          ...state,
          userDetails: action.userDetails
        };
    }),
)

export function UserDetailsReducer(state : any, action: any) {
    return _userDetailsReducer(state, action);
  }