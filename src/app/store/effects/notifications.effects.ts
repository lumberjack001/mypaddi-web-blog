import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

import { catchError, map, exhaustMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

// import * as $ from 'jquery';

import {
  getNotificationsStart,
  getNotificationsSuccess,
  acceptOrDeclineStart,
  acceptOrDeclineSuccess,
  markAllStart,
  markAllSuccess,
} from '../actions/notification.action';

import { NotificationsService } from '../../services/notifications/notifications.service';

import { Store } from '@ngrx/store';
import { setLoadingSpinner } from '../../Shared/store/loader.action';

@Injectable()
export class NotificationEffects {
  constructor(
    private actions$: Actions,
    private notification: NotificationsService,
    private store$: Store
  ) {}

  getNotifications$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getNotificationsStart),
      exhaustMap((actions) => {
        return this.notification.getNotifications().pipe(
          map((res: any) => {
            this.store$.dispatch(setLoadingSpinner({ status: false }));

            return getNotificationsSuccess({
              notifications: res.data.notifications,
              unread: res.data.unreads,
            });
          })
        );
      }),
      catchError((error) => {
        this.store$.dispatch(setLoadingSpinner({ status: false }));
        return throwError(error);
      })
    )
  );
  acceptDeclineRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(acceptOrDeclineStart),
      exhaustMap((actions) => {
        return this.notification
          .acceptDeclineRequest(actions.params.id, actions.params.status)
          .pipe(
            map((res: any) => {
              this.store$.dispatch(setLoadingSpinner({ status: false }));
              this.store$.dispatch(getNotificationsStart());
              return acceptOrDeclineSuccess(res.data);
            })
          );
      }),
      catchError((error) => {
        this.store$.dispatch(setLoadingSpinner({ status: false }));
        return throwError(error);
      })
    )
  );

  markAllRead$ = createEffect(() =>
    this.actions$.pipe(
      ofType(markAllStart),
      exhaustMap((_) => {
        return this.notification.markAllAsRead().pipe(
          map((res: any) => {
            this.store$.dispatch(setLoadingSpinner({ status: false }));
            this.store$.dispatch(getNotificationsStart());
            return markAllSuccess(res.data);
          })
        );
      }),
      catchError((error) => {
        this.store$.dispatch(setLoadingSpinner({ status: false }));
        return throwError(error);
      })
    )
  );
}
