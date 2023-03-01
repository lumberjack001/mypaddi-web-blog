import { createAction, props } from '@ngrx/store';

export const GET_USER_DETAILS_START = '[User] get user details Start';
export const GET_USER_DETAILS_SUCCESS = '[User] get user details Success';

export const UPDATE_USER_DETAILS_START = '[User] update user details Start';
export const UPDATE_USER_DETAILS_SUCCESS = '[User] update user details Success';

export const getUserDetailsStart = createAction(
    GET_USER_DETAILS_START,
    props<{username: string}>()
)

export const getUserDetailsSuccess = createAction(
    GET_USER_DETAILS_SUCCESS,
    props<{userDetails: any}>()
)

export const updateUserDetailsStart = createAction(
    UPDATE_USER_DETAILS_START,
    props<{payload: any}>()
)

export const updateUserDetailsSuccess = createAction(
    UPDATE_USER_DETAILS_SUCCESS,
    props<{data: any[]}>()
)
