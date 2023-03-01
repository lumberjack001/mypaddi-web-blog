import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { catchError, map, exhaustMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

// import * as $ from 'jquery';

import {
  getPostsStart,
  getPostsSuccess,
  getBlogPostStart,
  getBlogPostSuccess,
  getCategoriesStart,
  getCategoriesSuccess,
  setBlogPostLoader,
  getCommentsStart,
  getCommentsSuccess,
  getRepliesStart,
  getRepliesSuccess,
  setCommentsLoader,
  setRepliesLoader,
  getSortBlogsStart,
  getSortBlogsSuccess,
  getRecentPostsStart,
  getRecentPostsSuccess,
  setPaginationLoader,
  getFeaturedPostsStart,
  getFeaturedPostsSuccess,
  getPopularPostsStart,
  getPopularPostsSuccess,
  getPostsByCategoryStart,
  getPostsByCategorySuccess,
  setScrollingLoader,
  getCommentStart,
  getCommentSuccess,
  addCommentsStart,
  addCommentsSuccess,
  addRepliesStart,
  addRepliesSuccess,
} from '../actions/blog.action';

import { BlogService } from '../../services/blog/blog.service';

@Injectable()
export class BlogEffects {
  constructor(
    private actions$: Actions,
    private blogService: BlogService,
    private store$: Store,
    private router: Router
  ) {}

  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPostsStart),
      exhaustMap((action) => {
        return this.blogService
          .getPosts(action.postAfter, action.postBefore, action.perPage)
          .pipe(
            map((res: any) => {
              this.store$.dispatch(setBlogPostLoader({ status: false }));
              this.store$.dispatch(setPaginationLoader({ status: false }));
              this.store$.dispatch(setScrollingLoader({ status: false }));
              return getPostsSuccess({
                posts: res.data.results,
                cursor: res.data.cursor,
              });
            }),
            catchError((error) => {
              this.store$.dispatch(setBlogPostLoader({ status: false }));
              this.store$.dispatch(setPaginationLoader({ status: false }));
              this.store$.dispatch(setScrollingLoader({ status: false }));
              return throwError(error);
            })
          );
      })
    )
  );

  getSortBlogs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSortBlogsStart),
      exhaustMap((action) => {
        return this.blogService
          .getSortBlogs(
            action.sortType,
            action.postAfter,
            action.postBefore,
            action.perPage
          )
          .pipe(
            map((res: any) => {
              this.store$.dispatch(setBlogPostLoader({ status: false }));
              this.store$.dispatch(setPaginationLoader({ status: false }));
              this.store$.dispatch(setScrollingLoader({ status: false }));

              return getSortBlogsSuccess({
                sortPosts: res.data.results,
                sortCursor: res.data.cursor,
              });
            }),
            catchError((error) => {
              this.store$.dispatch(setBlogPostLoader({ status: false }));
              this.store$.dispatch(setPaginationLoader({ status: false }));
              this.store$.dispatch(setScrollingLoader({ status: false }));
              return throwError(error);
            })
          );
      })
    )
  );

  getRecentPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRecentPostsStart),
      exhaustMap((action) => {
        return this.blogService
          .getSortBlogs(
            'recent',
            action.postAfter,
            action.postBefore,
            action.perPage
          )
          .pipe(
            map((res: any) => {
              //this.store$.dispatch(setBlogPostLoader({status: false}))
              return getRecentPostsSuccess({
                recentPosts: res.data.results,
                recentCursor: res.data.cursor,
              });
            }),
            catchError((error) => {
              console.log(error);
              return throwError(error);
            })
          );
      })
    )
  );

  getFeaturedPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeaturedPostsStart),
      exhaustMap((action) => {
        return this.blogService.getFeaturedBlogs().pipe(
          map((res: any) => {
            this.store$.dispatch(setBlogPostLoader({ status: false }));
            return getFeaturedPostsSuccess({
              featuredPosts: res.data,
              featuredCursor: res.data.cursor,
            });
          }),
          catchError((error) => {
            this.store$.dispatch(setBlogPostLoader({ status: false }));
            return throwError(error);
          })
        );
      })
    )
  );

  getPopularPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularPostsStart),
      exhaustMap((action) => {
        return this.blogService.getPopularBlogs().pipe(
          map((res: any) => {
            //this.store$.dispatch(setBlogPostLoader({status: false}))
            return getPopularPostsSuccess({
              popularPosts: res.data.results,
              popularCursor: res.data.cursor,
            });
          }),
          catchError((error) => {
            return throwError(error);
          })
        );
      })
    )
  );

  getPostsByCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPostsByCategoryStart),
      exhaustMap((action) => {
        return this.blogService
          .getBlogsByCategory(
            action.cateId,
            action.postAfter,
            action.postBefore,
            action.perPage
          )
          .pipe(
            map((res: any) => {
              this.store$.dispatch(setBlogPostLoader({ status: false }));
              return getPostsByCategorySuccess({
                postsByCategory: res.data.results,
                postsByCategoryCursor: res.data.cursor,
              });
            }),
            catchError((error) => {
              this.store$.dispatch(setBlogPostLoader({ status: false }));
              alert(error.error.message);
              return throwError(error);
            })
          );
      })
    )
  );

  getBlogPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBlogPostStart),
      exhaustMap((action) => {
        return this.blogService.getBlogPost(action.slug).pipe(
          map((res: any) => {
            this.store$.dispatch(setBlogPostLoader({ status: false }));
            return getBlogPostSuccess({
              post: res.data,
              readCount: res.data.read_count,
              likesCount: res.data.likes_count,
              isLikedByUser: res.data.isLikedByUser,
            });
          }),
          catchError((error) => {
            this.store$.dispatch(setBlogPostLoader({ status: false }));
            return throwError(error);
          })
        );
      })
    )
  );

  getCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCategoriesStart),
      exhaustMap((action) => {
        return this.blogService
          .getCategories(
            action.categoryBefore,
            action.categoryAfter,
            action.perPage
          )
          .pipe(
            map((res: any) => {
              return getCategoriesSuccess({
                categories: res.data.results,
              });
            }),
            catchError((error) => {
              return throwError(error);
            })
          );
      })
    )
  );

  getComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCommentsStart),
      exhaustMap((action) => {
        return this.blogService.getComments(action.slug).pipe(
          map((res: any) => {
            this.store$.dispatch(setCommentsLoader({ status: false }));

            return getCommentsSuccess({
              comments: res.data,
            });
          }),
          catchError((error) => {
            this.store$.dispatch(setCommentsLoader({ status: false }));
            return throwError(error);
          })
        );
      })
    )
  );

  getComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCommentStart),
      exhaustMap((action) => {
        return this.blogService.getComment(action.id).pipe(
          map((res: any) => {
            this.store$.dispatch(setCommentsLoader({ status: false }));

            return getCommentSuccess({
              isCommentLikedByUser: res.data,
              commentLikes: res.data.likes_count,
            });
          }),
          catchError((error) => {
            this.store$.dispatch(setCommentsLoader({ status: false }));
            return throwError(error);
          })
        );
      })
    )
  );
  addComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addCommentsStart),
      exhaustMap((action) => {
        return this.blogService
          .postComment(action.params.slug, action.params.content)
          .pipe(
            map((res: any) => {
              this.store$.dispatch(setCommentsLoader({ status: false }));
              this.store$.dispatch(
                getBlogPostStart({ slug: action.params.slug })
              );
              this.store$.dispatch(
                getCommentsStart({ slug: action.params.slug })
              );
              return addCommentsSuccess({
                data: res,
              });
            }),
            catchError((error) => {
              this.store$.dispatch(setCommentsLoader({ status: false }));
              return throwError(error);
            })
          );
      })
    )
  );

  addCommentReply$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addRepliesStart),
      exhaustMap((action) => {
        return this.blogService
          .postCommentReply(action.params.id, action.params.content)
          .pipe(
            map((res: any) => {
              this.store$.dispatch(setRepliesLoader({ status: false }));
              this.store$.dispatch(
                getCommentsStart({ slug: action.params.slug })
              );
              this.store$.dispatch(getRepliesStart({ id: action.params.id }));
              return addRepliesSuccess({
                data: res,
              });
            }),
            catchError((error) => {
              this.store$.dispatch(setRepliesLoader({ status: false }));
              return throwError(error);
            })
          );
      })
    )
  );

  getReplies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRepliesStart),
      exhaustMap((action) => {
        return this.blogService.getReplies(action.id).pipe(
          map((res: any) => {
            this.store$.dispatch(setRepliesLoader({ status: false }));

            return getRepliesSuccess({
              replies: res.data,
            });
          }),
          catchError((error) => {
            this.store$.dispatch(setRepliesLoader({ status: false }));
            return throwError(error);
          })
        );
      })
    )
  );
}
