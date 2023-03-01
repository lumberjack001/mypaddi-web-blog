import { createAction, props } from '@ngrx/store'
import * as fromBlogInterface from '../../interfaces/blog.interface'

export const GET_UNAUTH_POSTS_START = '[Post] get unauth posts Start'
export const GET_UNAUTH_POSTS_SUCCESS = '[Post] get unauth posts Success'

export const GET_UNAUTH_POST_START = '[Post] get unauth post Start'
export const GET_UNAUTH_POST_SUCCESS = '[Post] get unauth post Success'
export const GET_UNAUTH_POST_LOADER = '[Post] get unauth post loading'

export const GET_UNAUTH_FEATUREDPOSTS_START = '[Post] get unauth featured post Start'
export const GET_UNAUTH_FEATUREDPOSTS_SUCCESS = '[Post] get unauth featured post Success'

export const GET_UNAUTH_COMMENTS_START = '[Post] get unauth post comments Start'
export const GET_UNAUTH_COMMENTS_SUCCESS = '[Post] get unauth post comments Success'

export const GET_UNAUTH_REPLIES_START = '[Post] get unauth replies Start';
export const GET_UNAUTH_REPLIES_SUCCESS = '[Post] get unauth replies Success';
export const GET_UNAUTH_REPLIES_LOADER = '[Post] get unauth replies loading';


export const getUnauthPostsStart = createAction(
  GET_UNAUTH_POSTS_START,
  props<{ postAfter?: string; postBefore?: string; perPage?: number }>()
);

export const getUnauthPostsSuccess = createAction(
  GET_UNAUTH_POSTS_SUCCESS,
  props<{ unauth_posts: any[];}>()
);

export const getUnauthPostStart = createAction(
  GET_UNAUTH_POST_START,
  props<{ slug: any}>()
);

export const getUnauthPostSuccess = createAction(
  GET_UNAUTH_POST_SUCCESS,
  props<{ unauth_slug: any; unauth_readCount: any; unauth_likesCount: any; }>()
);

export const setUnauthPostLoader = createAction(
  GET_UNAUTH_POST_LOADER,
  props<{ status: boolean }>()
);

export const getUnauthFeaturedStart = createAction(
  GET_UNAUTH_FEATUREDPOSTS_START,
);

export const getUnauthFeaturedSuccess = createAction(
  GET_UNAUTH_FEATUREDPOSTS_SUCCESS,
  props<{ unauth_featuredPosts: any[]}>()
);

export const getUnauthCommentsStart = createAction(
  GET_UNAUTH_COMMENTS_START,
  props<{slug: any}>()
)

export const getUnauthCommentsSuccess = createAction(
  GET_UNAUTH_COMMENTS_SUCCESS,
  props<{unauth_comments: any}>()
)

export const getUnauthRepliesStart = createAction(
  GET_UNAUTH_REPLIES_START,
  props<{id: any}>()
)

export const getUnauthRepliesSuccess = createAction(
  GET_UNAUTH_REPLIES_SUCCESS,
  props<{unauth_replies: any}>()
)

export const setUnauthRepliesLoader = createAction(
  GET_UNAUTH_REPLIES_LOADER,
  props<{status: boolean}>()
)
