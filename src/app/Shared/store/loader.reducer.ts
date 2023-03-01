import { setLoadingSpinner } from './loader.action';
import { createReducer, on } from '@ngrx/store';
import { initialState } from './loader.state';

const _sharedReducer = createReducer(
  initialState,
  on(setLoadingSpinner, (state, action) => {
    return {
      state,
      showLoading: action.status,
    };
  })
);

export function SharedReducer(state: any, action: any) {
  return _sharedReducer(state, action);
}
