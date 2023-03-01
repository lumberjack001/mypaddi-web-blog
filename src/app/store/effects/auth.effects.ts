import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map, exhaustMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loginStart,
  loginSuccess,
  signupStart,
  requestResetStart,
  requestResetSuccess,
  resetPasswordStart,
  resetPasswordSuccess,
} from '../actions/auth.action';
import { AuthService } from '../../services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from '../../Shared/store/loader.action';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private store$: Store
  ) {}
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.params).pipe(
          map((res: any) => {
            this.store$.dispatch(setLoadingSpinner({ status: false }));
            this.authService.setPayloader(res);
            this.router.navigateByUrl(this.route.snapshot.queryParams['returnUrl'] || '/blog');
            // this.router.navigateByUrl('/blog');
            return loginSuccess(res.data.user);
          }),
          catchError((error) => {
            this.store$.dispatch(setLoadingSpinner({ status: false }));
            return throwError(error);
          })
        );
      })
    )
  );

  requestReset$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestResetStart),
      exhaustMap((action) => {
        return this.authService.requestReset(action.params).pipe(
          map((res: any) => {
            this.store$.dispatch(setLoadingSpinner({ status: false }));
            this.router.navigateByUrl('/auth/reset-password');
            return requestResetSuccess(res.data.data);
          }),
          catchError((error) => {
            this.store$.dispatch(setLoadingSpinner({ status: false }));
            return throwError(error);
          })
        );
      })
    )
  );

  resetPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(resetPasswordStart),
      exhaustMap((action) => {
        return this.authService.resetPassword(action.params).pipe(
          map((res: any) => {
            this.store$.dispatch(setLoadingSpinner({ status: false }));
            this.router.navigateByUrl('/blog');
            return resetPasswordSuccess(res.data.data);
          }),
          catchError((error) => {
            this.store$.dispatch(setLoadingSpinner({ status: false }));
            return throwError(error);
          })
        );
      })
    )
  );

  signUp$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signupStart),
        exhaustMap((action) => {
          return this.authService.signUp(action.params).pipe(
            map((res: any) => {
              this.store$.dispatch(setLoadingSpinner({ status: false }));
              this.authService.setPayloader(res);
              this.router.navigateByUrl('/blog');
              return loginSuccess(res.data.user);
            }),
            catchError((error) => {
              this.store$.dispatch(setLoadingSpinner({ status: false }));
              return throwError(error);
            })
          );
        })
      ),
    { dispatch: false }
  );
}
