import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/theme.state';

import { getThemeSuccess, toggleThemeSuccess, setDarkThemeSuccess } from '../actions/theme.action';

const _themeReducer = createReducer(
  initialState,
  on(getThemeSuccess, (state, action) => {
    return {
      ...state,
      theme: action.theme,
    };
  }),

  on(toggleThemeSuccess, (state) => {
    return {
      ...state
    };
  }),

  on(setDarkThemeSuccess, (state) => {
    return {
      ...state
    };
  })
)

export function ThemeReducer(state: any, action: any) {
  return _themeReducer(state, action);
}
