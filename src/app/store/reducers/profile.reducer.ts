import {
  getProfilePollsSuccess,
  getProfilePostsSuccess,
  getProfileSuccess,
} from '../actions/profile.action';

import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/profile.state';

const _profileReducer = createReducer(
  initialState,
  on(getProfilePollsSuccess, (state, action) => {
    return {
      ...state,
      polls: action.polls,
    };
  }),

  on(getProfilePostsSuccess, (state, action) => {
    return {
      ...state,
      posts: action.posts,
    };
  }),
  on(getProfileSuccess, (state, action) => {
    return {
      ...state,
      profile: action.profile,
    };
  })
);

export function ProfileReducer(state: any, action: any) {
  return _profileReducer(state, action);
}
