import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Store } from '@ngrx/store';

import { catchError, map, exhaustMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  getUnauthPostsStart,
  getUnauthPostsSuccess,
  getUnauthPostStart,
  getUnauthPostSuccess,
  setUnauthPostLoader,
  getUnauthFeaturedStart,
  getUnauthFeaturedSuccess,
  getUnauthCommentsStart,
  getUnauthCommentsSuccess,
  getUnauthRepliesStart,
  getUnauthRepliesSuccess,
  setUnauthRepliesLoader,
} from '../actions/unauth-blog.action';

import { UnauthBlogService } from '../../services/unauth-blog/unauth-blog.service';

@Injectable()
export class UnauthBlogEffects {
  constructor(
    private actions$: Actions,
    private UnauthBlogService: UnauthBlogService,
    private store$: Store
  ) {}

  getUnauthPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUnauthPostsStart),
      exhaustMap((action) => {
        return this.UnauthBlogService.getUnauthPosts(
          action.postAfter,
          action.postBefore,
          action.perPage
        ).pipe(
          map((res: any) => {
            this.store$.dispatch(setUnauthPostLoader({ status: false }));
            return getUnauthPostsSuccess({
              unauth_posts: res.data.posts,
            });
          }),
          catchError((error) => {
            this.store$.dispatch(setUnauthPostLoader({ status: false }));
            console.log(error);
            return throwError(error);
          })
        );
      })
    )
  );

  getUnauthPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUnauthPostStart),
      exhaustMap((action) => {
        return this.UnauthBlogService.getUnauthPost(action.slug).pipe(
          map((res: any) => {
            this.store$.dispatch(setUnauthPostLoader({ status: false }));
            return getUnauthPostSuccess({
              unauth_slug: res.data,
              unauth_readCount: res.data.read_count,
              unauth_likesCount: res.data.likes_count,
            });
          }),
          catchError((error) => {
            this.store$.dispatch(setUnauthPostLoader({ status: false }));
            console.log(error);
            return throwError(error);
          })
        );
      })
    )
  );

  getUnauthFeaturedPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUnauthFeaturedStart),
      exhaustMap((action) => {
        return this.UnauthBlogService.getUnauthFeaturedPosts().pipe(
          map((res: any) => {
            return getUnauthFeaturedSuccess({
              unauth_featuredPosts: res.data,
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

  getUnauthComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUnauthCommentsStart),
      exhaustMap((action) => {
        return this.UnauthBlogService.getUnauthComments(action.slug).pipe(
          map((res: any) => {
            return getUnauthCommentsSuccess({
              unauth_comments: res.data,
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

  getUnauthCommentReplies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUnauthRepliesStart),
      exhaustMap((action) => {
        return this.UnauthBlogService.getUnauthCommentReplies(action.id).pipe(
          map((res: any) => {
            this.store$.dispatch(setUnauthRepliesLoader({ status: false }));
            return getUnauthRepliesSuccess({
              unauth_replies: res.data,
            });
          }),
          catchError((error) => {
            this.store$.dispatch(setUnauthRepliesLoader({ status: false }));
            console.log(error);
            return throwError(error);
          })
        );
      })
    )
  );
}
