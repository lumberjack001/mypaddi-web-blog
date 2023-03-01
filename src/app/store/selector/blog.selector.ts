import { createFeatureSelector, createSelector } from '@ngrx/store';

export const BLOG_STATE_NAME = 'blog';
const getPostsState = createFeatureSelector<any>('blog');

export const getPosts = createSelector(getPostsState, (state) => {
    return state.posts;
});

export const getSortPosts = createSelector(getPostsState, (state) => {
  return state.sortPosts;
});

export const getRecentPosts = createSelector(getPostsState, (state) => {
  return state.recentPosts;
});

export const getFeaturedPosts = createSelector(getPostsState, (state) => {
  return state.featuredPosts;
});

export const getPopularPosts = createSelector(getPostsState, (state) => {
  return state.popularPosts;
});

export const getPostsByCategory = createSelector(getPostsState, (state) => {
  return state.postsByCategory;
})
export const getPostsByCategoryCursor = createSelector(getPostsState, (state) => {
  return state.postsByCategoryCursor;
})
export const getPostsCursor = createSelector(getPostsState, (state) => {
  return state.cursor;
});

export const getSortPostsCursor = createSelector(getPostsState, (state) => {
  return state.sortCursor;
});

export const getCategories = createSelector(getPostsState, (state) => {
    return state.categories;
  });

export const getBlogPost = createSelector(getPostsState, (state) => {
    return state.slug;
});

export const getBlogLikes = createSelector(getPostsState, (state) => {
  return state.likesCount;
});

export const isLikedByUser = createSelector(getPostsState, (state) => {
  return state.isLikedByUser;
});

export const isBlogLoading = createSelector(getPostsState, (state) => {
    return  state.isBlogLoading;
})

export const getComments = createSelector(getPostsState, (state) => {
  return state.comments;
});

export const getCommentLikes = createSelector(getPostsState, (state) => {
  return state.commentLikes;
});

export const isCommentLikedByUser = createSelector(getPostsState, (state) => {
  return state.isCommentLikedByUser;
});

export const isCommentsLoading = createSelector(getPostsState, (state) => {
  return state.isCommentLoading;
});

export const getReplies = createSelector(getPostsState, (state) => {
  return state.replies;
});

export const isRepliesLoading = createSelector(getPostsState, (state) => {
  return state.isReplyLoading;
});

export const isPaginationLoading = createSelector(getPostsState, (state) => {
  return state.isPaginationLoading;
});

export const isScrollingLoading = createSelector(getPostsState, (state) => {
  return state.isScrollingLoading;
});
