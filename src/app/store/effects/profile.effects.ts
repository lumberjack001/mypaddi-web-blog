import { Injectable, ViewChild } from '@angular/core';
import { throwError } from 'rxjs';

import * as $ from 'jquery';

import { catchError, map, exhaustMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  getProfilePollsStart,
  getProfilePollsSuccess,
  getProfilePostsStart,
  getProfilePostsSuccess,
  updateProfileStart,
  updateProfileSuccess,
  updateAccountStart,
  updateAccountSuccess,
  getProfileStart,
  getProfileSuccess,
} from '../actions/profile.action';

import { Store } from '@ngrx/store';
import { setLoadingSpinner } from '../../Shared/store/loader.action';
import { ProfileService } from '../../services/profile/profile.service';
@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService,
    private store$: Store
  ) {}

  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProfilePostsStart),
      exhaustMap((action) => {
        return this.profileService.getPosts(action.username).pipe(
          map((res: any) => {
            this.store$.dispatch(setLoadingSpinner({ status: false }));
            return getProfilePostsSuccess({ posts: res.data });
          }),
          catchError((error) => {
            this.store$.dispatch(setLoadingSpinner({ status: false }));
            return throwError(error);
          })
        );
      })
    )
  );

  getPolls$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProfilePollsStart),
      exhaustMap((action) => {
        return this.profileService.getPolls(action.username).pipe(
          map((res: any) => {
            this.store$.dispatch(setLoadingSpinner({ status: false }));
            return getProfilePollsSuccess({ polls: res.data });
          }),
          catchError((error) => {
            this.store$.dispatch(setLoadingSpinner({ status: false }));
            return throwError(error);
          })
        );
      })
    )
  );

  updateProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateProfileStart),
      exhaustMap((action) => {
        return this.profileService.updateProfile(action.params).pipe(
          map((res: any) => {
            this.store$.dispatch(setLoadingSpinner({ status: false }));
            $('#editprofile').removeClass('show');
            $('.modal-backdrop').remove();
            return updateProfileSuccess(res.data);
          }),
          catchError((error) => {
            this.store$.dispatch(setLoadingSpinner({ status: false }));
            return throwError(error);
          })
        );
      })
    )
  );

  updateAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateAccountStart),
      exhaustMap((action) => {
        return this.profileService.updateAccount(action.params).pipe(
          map((res: any) => {
            this.store$.dispatch(setLoadingSpinner({ status: false }));
            $('#editprofile').removeClass('show');
            $('.modal-backdrop').remove();
            return updateAccountSuccess(res.data);
          }),
          catchError((error) => {
            this.store$.dispatch(setLoadingSpinner({ status: false }));
            return throwError(error);
          })
        );
      })
    )
  );

  getProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProfileStart),
      exhaustMap((action) => {
        return this.profileService.getProfileDetails(action.username).pipe(
          map((res: any) => {
            this.store$.dispatch(setLoadingSpinner({ status: false }));
            console.log(res.data);
            return updateProfileSuccess(res.data);
          }),
          catchError((error) => {
            this.store$.dispatch(setLoadingSpinner({ status: false }));
            return throwError(error);
          })
        );
      })
    )
  );
}
