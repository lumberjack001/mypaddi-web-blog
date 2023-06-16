import { createAction, props } from '@ngrx/store';

export const GET_THEME_START = '[Theme] get theme Start';
export const GET_THEME_SUCCESS = '[Theme] get theme Success';

export const TOGGLE_THEME_START = '[Theme] toggle theme Start';
export const TOGGLE_THEME_SUCCESS = '[Theme] toggle theme Success';


export const SET_DARKTHEME_START = '[Theme] set dark theme Start';
export const SET_DARKTHEME_SUCCESS = '[Theme] set dark theme Success';

export const getThemeStart = createAction(
  GET_THEME_START
);

export const getThemeSuccess = createAction(
  GET_THEME_SUCCESS,
  props<{ theme: string }>()
);

export const toggleThemeStart = createAction(
  TOGGLE_THEME_START
);

export const toggleThemeSuccess = createAction(
  TOGGLE_THEME_SUCCESS
);

export const setDarkThemeStart = createAction(
  SET_DARKTHEME_START
);

export const setDarkThemeSuccess = createAction(
  SET_DARKTHEME_SUCCESS
);
