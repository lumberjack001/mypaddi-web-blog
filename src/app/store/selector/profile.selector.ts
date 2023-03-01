import { createFeatureSelector, createSelector } from '@ngrx/store';
export const PROFILE_STATE_NAME = 'profile';
const profileSelector = createFeatureSelector<profile>(PROFILE_STATE_NAME);

interface profile {
  posts: any[];
  polls: any[];
  profile: any;
}

export const getProfilePosts = createSelector(profileSelector, (state) => {
  return state.posts;
});

export const getProfilePolls = createSelector(profileSelector, (state) => {
  return state.polls;
});

export const getProfileDetails = createSelector(profileSelector, (state) => {
  return state.profile;
});
