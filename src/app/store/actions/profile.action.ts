import { createAction, props } from '@ngrx/store';

export const GET_PROFILE_POST_START = '[Profile] get profile post Start';
export const GET_PROFILE_POST_SUCCESS = '[Profile] get profile post Success';

export const GET_PROFILE_POLL_START = '[Profile] get profile poll Start';
export const GET_PROFILE_POLL_SUCCESS = '[Profile] get profile poll Success';

export const UPDATE_PROFILE_START = '[Profile] update user profile start';
export const UPDATE_PROFILE_SUCCESS = '[Profile] update user profile success';

export const UPDATE_ACCOUNT_START = '[Profile] update user account start';
export const UPDATE_ACCOUNT_SUCCESS = '[Profile] update user account success';

export const GET_PROFILE_START = '[Profile] get profile start';
export const GET_PROFILE_SUCCESS = '[Profile] get profile success';

import * as fromAuthInterface from '../../interfaces/profile.interface';

//-----getPosts------
export const getProfilePostsStart = createAction(
  GET_PROFILE_POST_START,
  props<{ username: string }>()
);
export const getProfilePostsSuccess = createAction(
  GET_PROFILE_POST_SUCCESS,
  props<{ posts: any[] }>()
);

//-----getPosts------

//-----getPolls------
export const getProfilePollsStart = createAction(
  GET_PROFILE_POLL_START,
  props<{ username: string }>()
);
export const getProfilePollsSuccess = createAction(
  GET_PROFILE_POLL_SUCCESS,
  props<{ polls: any[] }>()
);
//-----getPoll------

//-----update profile -----
export const updateProfileStart = createAction(
  UPDATE_PROFILE_START,
  props<{ params: fromAuthInterface.Profile }>()
);

export const updateProfileSuccess = createAction(
  UPDATE_PROFILE_SUCCESS,
  props<{ profile: any }>()
);
//-----update profile -----

//-----get profile -----
export const getProfileStart = createAction(
  GET_PROFILE_START,
  props<{ username: string }>()
);

export const getProfileSuccess = createAction(
  GET_PROFILE_SUCCESS,
  props<{ profile: any }>()
);

//-----get profile -----

//----update account-----
export const updateAccountStart = createAction(
  UPDATE_ACCOUNT_START,
  props<{ params: fromAuthInterface.Account }>()
);

export const updateAccountSuccess = createAction(
  UPDATE_ACCOUNT_SUCCESS,
  props<{ account: any }>()
);

//----update account-----
