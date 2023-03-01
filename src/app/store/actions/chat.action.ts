import { createAction, props } from '@ngrx/store';

export const GET_DOCTORS_START = '[Chat] get doctors Start';
export const GET_DOCTORS_SUCCESS = '[Chat] get doctors Success';

export const GET_COUNSELLORS_START = '[Chat] get counsellors Start';
export const GET_COUNSELLORS_SUCCESS = '[Chat] get counsellors Success';

export const getDoctorsStart = createAction(
  GET_DOCTORS_START,
);

export const getDoctorsSuccess = createAction(
  GET_DOCTORS_SUCCESS,
  props<{ doctors: any[];}>()
);

export const getCounsellorsStart = createAction(
  GET_COUNSELLORS_START,
);

export const getCounsellorsSuccess = createAction(
  GET_COUNSELLORS_SUCCESS,
  props<{ counsellors: any[];}>()
);
