import { createFeatureSelector, createSelector } from '@ngrx/store';

export const USER_DETAILS_STATE_NAME = 'user-details';
const getUserDetailsState = createFeatureSelector<any>('user-details');

export const getUserDetails = createSelector(getUserDetailsState, (state) => {
    return state.userDetails;
});
