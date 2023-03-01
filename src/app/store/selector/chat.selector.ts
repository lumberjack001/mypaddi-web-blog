import { createFeatureSelector, createSelector } from '@ngrx/store';

export const CHAT_STATE_NAME = 'chat';
const getChatState = createFeatureSelector<any>('chat');

export const getDoctors = createSelector(getChatState, (state) => {
    return state.doctors;
});

export const getCounsellors = createSelector(getChatState, (state) => {
    return state.counsellors;
});
