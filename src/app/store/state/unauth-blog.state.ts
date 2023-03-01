export interface UnauthBlogState{
  unauth_categories: any;
  unauth_posts: any;
  unauth_slug: any;
  unauth_featuredPosts: any;
  unauth_comments: any;
  unauth_replies: any;
  unauth_isCommentLoading: boolean;
  unauth_isBlogLoading: boolean;
  unauth_isReplyLoading: boolean;
}

export const initialState: UnauthBlogState = {
  unauth_categories: null,
  unauth_posts: null,
  unauth_slug: null,
  unauth_featuredPosts: null,
  unauth_comments: null,
  unauth_replies: null,
  unauth_isCommentLoading: false,
  unauth_isBlogLoading: false,
  unauth_isReplyLoading: false,
}
