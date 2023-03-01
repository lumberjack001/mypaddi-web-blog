import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

import { catchError, map, exhaustMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  getSubscriptionsStart,
  getSubscriptionsSuccess,
  verifySubscriptionStart,
  verifySubscriptionSuccess,
} from '../actions/subscription.action';

import { Store } from '@ngrx/store';
import { setLoadingSpinner } from '../../Shared/store/loader.action';
import { SubscriptionService } from '../../services/subscription/subscription.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class SubscriptionEffects {
  constructor(
    private actions$: Actions,
    private subscriptionService: SubscriptionService,
    private store$: Store,
    private toastr: ToastrService
  ) {}

  getSubscriptions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSubscriptionsStart),
      exhaustMap((_) => {
        return this.subscriptionService.getSubscriptions().pipe(
          map((res: any) => {
            this.store$.dispatch(setLoadingSpinner({ status: false }));
            return getSubscriptionsSuccess({ subscriptions: res.data });
          }),
          catchError((error) => {
            this.store$.dispatch(setLoadingSpinner({ status: false }));
            return throwError(error);
          })
        );
      })
    )
  );

  verifySubscription$ = createEffect(() =>
    this.actions$.pipe(
      ofType(verifySubscriptionStart),
      exhaustMap((action) => {
        return this.subscriptionService
          .verifySubscription(action.purchaseType, action.payload)
          .pipe(
            map((res: any) => {
              this.store$.dispatch(setLoadingSpinner({ status: false }));
              this.toastr.success(
                'Your subscription was successful',
                'Success',
                {
                  timeOut: 4000,
                }
              );

              return verifySubscriptionSuccess({ details: res.data });
            }),
            catchError((error) => {
              this.toastr.error(
                error.error.message ? error.error.message : 'An Error Occured',
                'Error',
                {
                  timeOut: 4000,
                }
              );
              this.store$.dispatch(setLoadingSpinner({ status: false }));
              return throwError(error);
            })
          );
      })
    )
  );
}
