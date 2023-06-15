import { createFeatureSelector, createSelector } from '@ngrx/store';

export const AUTH_STATE_NAME = 'auth';

const getAuthState = createFeatureSelector<any>(AUTH_STATE_NAME);

export const getResetRequestData = createSelector(getAuthState, (state) => {
    return state.resetRequestData;
})

export const getResetPasswordData = createSelector(getAuthState, (state) => {
    return state.resetPasswordData;
})
