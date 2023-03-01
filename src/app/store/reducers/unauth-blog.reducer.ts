import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/unauth-blog.state';

import {
  getUnauthPostsSuccess,
  getUnauthPostSuccess,
  setUnauthPostLoader,
  getUnauthFeaturedSuccess,
  getUnauthCommentsSuccess,
  getUnauthRepliesSuccess,
  setUnauthRepliesLoader,
} from '../actions/unauth-blog.action';

const _blogReducer = createReducer(
  initialState,
  on(getUnauthPostsSuccess, (state, action) => {
    return {
      ...state,
      unauth_posts: action.unauth_posts,
    };
  }),

  on(getUnauthPostSuccess, (state, action) => {
    return {
      ...state,
      unauth_slug: action.unauth_slug,
      unauth_readCount: action.unauth_readCount,
      unauth_likesCount: action.unauth_likesCount,
    };
  }),

  on(setUnauthPostLoader, (state, action) => {
    return {
      ...state,
      unauth_isBlogLoading: action.status,
    };
  }),

  on(getUnauthFeaturedSuccess, (state, action) => {
    return {
      ...state,
      unauth_featuredPosts: action.unauth_featuredPosts,
    };
  }),

  on(getUnauthCommentsSuccess, (state, action) => {
    return {
      ...state,
      unauth_comments: action.unauth_comments,
    };
  }),

  on(getUnauthRepliesSuccess, (state, action) => {
    return {
      ...state,
      unauth_replies: action.unauth_replies,
    };
  }),

  on(setUnauthRepliesLoader, (state, action) => {
    return {
      ...state,
      unauth_isReplyLoading: action.status,
    };
  })
);

export function UnauthBlogReducer(state: any, action: any) {
  return _blogReducer(state, action);
}
