import { createAction, props } from '@ngrx/store';
import * as fromBlogInterface from '../../interfaces/blog.interface'

export const GET_POST_START = '[Blog] get post Start';
export const GET_POST_SUCCESS = '[Blog] get post Success';

export const GET_SORTBLOGS_START = '[Blog] get sortblogs Start';
export const GET_SORTBLOGS_SUCCESS = '[Blog] get sortblogs Success';

export const GET_RECENTPOSTS_START = '[Blog] get recentposts Start';
export const GET_RECENTPOSTS_SUCCESS = '[Blog] get recentposts Success';

export const GET_FEATUREDPOSTS_START = '[Blog] get featuredposts Start';
export const GET_FEATUREDPOSTS_SUCCESS = '[Blog] get featuredposts Success';
export const GET_FEATUREDPOSTS_LOADER = '[Blog] get featuredposts loading';


export const GET_POPULARPOSTS_START = '[Blog] get popularposts Start';
export const GET_POPULARPOSTS_SUCCESS = '[Blog] get popularposts Success';

export const GET_POSTSBYCATEGORY_START = '[Blog] get postsbycategory Start';
export const GET_POSTSBYCATEGORY_SUCCESS = '[Blog] get postsbycategory Success';


export const GET_CATEGORIES_START = '[Blog] get categories Start';
export const GET_CATEGORIES_SUCCESS = '[Blog] get categories Success';

export const GET_BLOGPOST_START = '[Blog] get blogpost Start';
export const GET_BLOGPOST_SUCCESS = '[Blog] get blogpost Success';
export const GET_BLOGPOST_LOADER = '[Blog] get blogpost loading';

export const ADD_COMMENTS_START = '[Blog] add comments start';
export const ADD_COMMENTS_SUCCESS = '[Blog] add comments sucess';
export const GET_COMMENTS_START = '[Blog] get comments Start';
export const GET_COMMENTS_SUCCESS = '[Blog] get comments Success';
export const GET_COMMENTS_LOADER = '[Blog] get comments loading';

export const GET_COMMENT_START = '[Blog] get comment Start';
export const GET_COMMENT_SUCCESS = '[Blog] get comment Success';

export const ADD_REPLIES_START = '[Blog] add replies start';
export const ADD_REPLIES_SUCCESS = '[Blog] add replies sucess';
export const GET_REPLIES_START = '[Blog] get replies Start';
export const GET_REPLIES_SUCCESS = '[Blog] get replies Success';
export const GET_REPLIES_LOADER = '[Blog] get replies loading';

export const GET_PAGINATION_LOADER = '[Blog] get pagination loading';
export const GET_SCROLL_LOADER = '[Blog] get scroll loader';


export const getPostsStart = createAction(
    GET_POST_START,
    props<{ postAfter?: string; postBefore?: string; perPage?: number }>()
);

export const getPostsSuccess = createAction(
    GET_POST_SUCCESS,
    props<{ posts: any[]; cursor: any}>()
);

export const getSortBlogsStart = createAction(
  GET_SORTBLOGS_START,
  props<{ sortType: string; postBefore?: string; postAfter?: string; perPage?: number}>()
);

export const getSortBlogsSuccess = createAction(
  GET_SORTBLOGS_SUCCESS,
  props<{ sortPosts: any[]; sortCursor: any}>()
);

export const getRecentPostsStart = createAction(
  GET_RECENTPOSTS_START,
  props<{postBefore?: string; postAfter?: string; perPage?: number}>()
);

export const getRecentPostsSuccess = createAction(
  GET_RECENTPOSTS_SUCCESS,
  props<{ recentPosts: any[]; recentCursor: any}>()
);

export const getFeaturedPostsStart = createAction(
  GET_FEATUREDPOSTS_START
);

export const getFeaturedPostsSuccess = createAction(
  GET_FEATUREDPOSTS_SUCCESS,
  props<{ featuredPosts: any[]; featuredCursor: any}>()
);

export const setFeaturedPostsLoader = createAction(
  GET_FEATUREDPOSTS_LOADER,
  props<{ status: any }>()
);

export const getPopularPostsStart = createAction(
  GET_POPULARPOSTS_START
);

export const getPopularPostsSuccess = createAction(
  GET_POPULARPOSTS_SUCCESS,
  props<{ popularPosts: any[]; popularCursor: any}>()
);

export const getPostsByCategoryStart = createAction(
  GET_POSTSBYCATEGORY_START,
  props<{cateId: any; sort_by?: string; postAfter?: string; postBefore?: string; perPage?: number; }>()
)

export const getPostsByCategorySuccess = createAction(
  GET_POSTSBYCATEGORY_SUCCESS,
  props<{postsByCategory: any[]; postsByCategoryCursor: any }>()
)
export const getBlogPostStart = createAction(
  GET_BLOGPOST_START,
  props<{slug: any;}>()
);

export const getBlogPostSuccess = createAction(
  GET_BLOGPOST_SUCCESS,
  props<{post: any; readCount: any; likesCount: any; isLikedByUser: boolean}>()
)

export const getCommentsStart = createAction(
  GET_COMMENTS_START,
  props<{ slug: any;}>()
)

export const getCommentStart = createAction(
  GET_COMMENT_START,
  props<{ id: any;}>()
)

export const getCommentSuccess = createAction(
  GET_COMMENTS_SUCCESS,
  props<{isCommentLikedByUser: any; commentLikes: any}>()
)

export const getCommentsSuccess = createAction(
  GET_COMMENTS_SUCCESS,
  props<{ comments: any;}>()
)

export const addCommentsStart = createAction(
  ADD_COMMENTS_START,
  props<{params: fromBlogInterface.Comment}>()
)

export const addCommentsSuccess = createAction(
  ADD_COMMENTS_SUCCESS,
  props<{data: any[]}>()
)

export const addRepliesStart = createAction(
  ADD_REPLIES_START,
  props<{params: fromBlogInterface.Reply}>()
)

export const addRepliesSuccess = createAction(
  ADD_REPLIES_SUCCESS,
  props<{data: any[]}>()
)


export const getRepliesStart = createAction(
  GET_REPLIES_START,
  props<{ id: any;}>()
)

export const getRepliesSuccess = createAction(
  GET_REPLIES_SUCCESS,
  props<{ replies: any;}>()
)


export const setBlogPostLoader = createAction(
  GET_BLOGPOST_LOADER,
  props<{ status: any }>()
);

export const setCommentsLoader = createAction(
  GET_COMMENTS_LOADER,
  props<{ status: any }>()
);

export const setRepliesLoader = createAction(
  GET_REPLIES_LOADER,
  props<{ status: any }>()
);

export const getCategoriesStart = createAction(
  GET_CATEGORIES_START,
  props<{ categoryAfter?: string; categoryBefore?: string; perPage?: number }>()
);
export const getCategoriesSuccess = createAction(
  GET_CATEGORIES_SUCCESS,
  props<{ categories: any[];}>()
);
  
export const setPaginationLoader = createAction(
  GET_PAGINATION_LOADER,
  props<{ status: any }>()
);

export const setScrollingLoader = createAction(
  GET_SCROLL_LOADER,
  props<{ status: any }>()
);
