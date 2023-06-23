export interface BlogState{
  categories: any;
  posts: any;
  slug: any;
  sortPosts: any;
  recentPosts: any;
  popularPosts: any;
  featuredPosts: any;
  postsByCategory: any;
  comments: any;
  replies: any;
  isCommentLoading: boolean;
  isScrollingLoading: boolean;
  isBlogLoading: boolean;
  isReplyLoading: boolean;
  isPaginationLoading: boolean;
  isFeaturedPostsLoading: boolean;
}

export const initialState: BlogState = {
  categories: null,
  posts: null,
  slug: null,
  sortPosts: null,
  recentPosts: null,
  popularPosts: null,
  featuredPosts: null,
  postsByCategory: null,
  comments: null,
  replies: null,
  isCommentLoading: false,
  isScrollingLoading: false,
  isBlogLoading: false,
  isReplyLoading: false,
  isPaginationLoading: false,
  isFeaturedPostsLoading: false,
}
