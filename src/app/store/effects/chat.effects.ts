import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Store } from '@ngrx/store';

import { catchError, map, exhaustMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  getDoctorsStart,
  getDoctorsSuccess,
  getCounsellorsStart,
  getCounsellorsSuccess,
} from '../actions/chat.action';

import { ChatService } from '../../services/chat/chat.service';
@Injectable()
export class ChatEffects {
  constructor(
    private actions$: Actions,
    private chatService: ChatService,
    private store$: Store
  ) {}

  getDoctors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getDoctorsStart),
      exhaustMap((action) => {
        return this.chatService.getDoctors().pipe(
          map((res: any) => {
            return getDoctorsSuccess({
              doctors: res.data,
            });
          }),
          catchError((error) => {
            return throwError(error);
          })
        );
      })
    )
  );

  getCounsellors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCounsellorsStart),
      exhaustMap((action) => {
        return this.chatService.getCounsellors().pipe(
          map((res: any) => {
            return getCounsellorsSuccess({
              counsellors: res.data,
            });
          }),
          catchError((error) => {
            return throwError(error);
          })
        );
      })
    )
  );
}
