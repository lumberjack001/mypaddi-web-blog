import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/chat.state';
import {
  getDoctorsSuccess,
  getCounsellorsSuccess,
} from '../actions/chat.action';

const _chatReducer = createReducer(
  initialState,
  on(getDoctorsSuccess, (state, action) => {
    return {
      ...state,
      doctors: action.doctors,
    };
  }),
  on(getCounsellorsSuccess, (state, action) => {
    return {
      ...state,
      counsellors: action.counsellors,
    };
  })
);

export function ChatReducer(state: any, action: any) {
  return _chatReducer(state, action);
}
