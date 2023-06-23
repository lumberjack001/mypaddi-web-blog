import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/blog.state';
import {
  getPostsSuccess,
  getCategoriesSuccess,
  getBlogPostSuccess,
  setBlogPostLoader,
  getCommentsSuccess,
  getRepliesSuccess,
  setCommentsLoader,
  setRepliesLoader,
  getSortBlogsSuccess,
  getRecentPostsSuccess,
  setPaginationLoader,
  getFeaturedPostsSuccess,
  setFeaturedPostsLoader,
  getPopularPostsSuccess,
  getPostsByCategorySuccess,
  setScrollingLoader,
  addCommentsSuccess,
  addRepliesSuccess,
} from '../actions/blog.action';
import { retry } from 'rxjs/operators';

const _blogReducer = createReducer(
  initialState,
  on(getPostsSuccess, (state, action) => {
    return {
      ...state,
      posts: action.posts,
      cursor: action.cursor,
    };
  }),

  on(getRecentPostsSuccess, (state, action) => {
    return {
      ...state,
      recentPosts: action.recentPosts,
      recentCursor: action.recentCursor,
    };
  }),

  on(getSortBlogsSuccess, (state, action) => {
    return {
      ...state,
      sortPosts: action.sortPosts,
      sortCursor: action.sortCursor,
    };
  }),

  on(getFeaturedPostsSuccess, (state, action) => {
    return {
      ...state,
      featuredPosts: action.featuredPosts,
      featuredCursor: action.featuredCursor,
    };
  }),

  on(setFeaturedPostsLoader, (state, action) => {
    return {
      ...state,
      isFeaturedPostsLoading: action.status,
    };
  }),

  on(getPopularPostsSuccess, (state, action) => {
    return {
      ...state,
      popularPosts: action.popularPosts,
      popularCursor: action.popularCursor,
    };
  }),

  on(getPostsByCategorySuccess, (state, action) => {
    return {
      ...state,
      postsByCategory: action.postsByCategory,
      postsByCategoryCursor: action.postsByCategoryCursor,
    };
  }),

  on(getCategoriesSuccess, (state, action) => {
    return {
      ...state,
      categories: action.categories,
    };
  }),

  on(getBlogPostSuccess, (state, action) => {
    return {
      ...state,
      slug: action.post,
      readCount: action.readCount,
      likesCount: action.likesCount,
      isLikedByUser: action.isLikedByUser,
    };
  }),

  on(setBlogPostLoader, (state, action) => {
    return {
      ...state,
      isBlogLoading: action.status,
    };
  }),

  on(getCommentsSuccess, (state, action) => {
    return {
      ...state,
      comments: action.comments,
    };
  }),

  on(addCommentsSuccess, (state, action) => {
    return {
      ...state,
    };
  }),

  on(setCommentsLoader, (state, action) => {
    return {
      ...state,
      isCommentLoading: action.status,
    };
  }),
  on(getRepliesSuccess, (state, action) => {
    return {
      ...state,
      replies: action.replies,
    };
  }),
  on(addRepliesSuccess, (state, action) => {
    return {
      ...state,
    };
  }),
  on(setRepliesLoader, (state, action) => {
    return {
      ...state,
      isReplyLoading: action.status,
    };
  }),
  on(setPaginationLoader, (state, action) => {
    return {
      ...state,
      isPaginationLoading: action.status,
    };
  }),
  on(setScrollingLoader, (state, action) => {
    return {
      ...state,
      isScrollingLoading: action.status,
    };
  })
);

export function BlogReducer(state: any, action: any) {
  return _blogReducer(state, action);
}
