import { createFeatureSelector, createSelector } from '@ngrx/store';

export const THEME_STATE_NAME = 'theme';

const getThemeState = createFeatureSelector<any>('theme');

export const getTheme = createSelector(getThemeState, (state) => {
    return state.theme;
});

