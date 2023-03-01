import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Store } from '@ngrx/store';

import { catchError, map, exhaustMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  getUserDetailsStart,
  getUserDetailsSuccess,
} from '../actions/user-details.action';

import { UserService } from '../../services/user/user.service';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store$: Store
  ) {}

  getUserDetails = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserDetailsStart),
      exhaustMap((action) => {
        return this.userService.getUserDetails(action.username).pipe(
          map((res: any) => {
            return getUserDetailsSuccess({
              userDetails: res.data,
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
}
