import { createFeatureSelector, createSelector } from '@ngrx/store';

export const UNAUTH_BLOG_STATE_NAME = 'unauth-blog';
const getUnauthPostsState = createFeatureSelector<any>('unauth-blog');

export const getUnauthPosts = createSelector(getUnauthPostsState, (state) => {
    return state.unauth_posts;
});

export const getUnauthPost = createSelector(getUnauthPostsState, (state) => {
    return state.unauth_slug;
});

export const getUnauthLikes = createSelector(getUnauthPostsState, (state) => {
    return state.unauth_likesCount;
});

export const isUnauthBlogLoading = createSelector(getUnauthPostsState, (state) => {
    return  state.unauth_isBlogLoading;
})

export const getUnauthFeatured = createSelector(getUnauthPostsState, (state) => {
    return  state.unauth_featuredPosts;
})

export const getUnauthComments = createSelector(getUnauthPostsState, (state) => {
    return  state.unauth_comments;
})

export const getUnauthCommentsReplies = createSelector(getUnauthPostsState, (state) => {
    return  state.unauth_replies;
})

export const isUnauthReplyLoading = createSelector(getUnauthPostsState, (state) => {
    return  state.unauth_isReplyLoading;
})
