import { createAction, props } from '@ngrx/store';

import { SubscriptionPayload } from '../../interfaces/subscription.interface';

export const GET_SUBSCRIPTIONS_START = '[Subscription] get subscriptions Start';
export const GET_SUBSCRIPTIONS_SUCCESS =
  '[Subscription] get subscription Success';

export const VERIFY_SUBSCRIPTION_START =
  '[Subscription] verify subscriptions Start';
export const VERIFY_SUBSCRIPTION_SUCCESS =
  '[Subscription] verify subscriptions Success';

export const getSubscriptionsStart = createAction(GET_SUBSCRIPTIONS_START);
export const getSubscriptionsSuccess = createAction(
  GET_SUBSCRIPTIONS_SUCCESS,
  props<{ subscriptions: any[] }>()
);

export const verifySubscriptionStart = createAction(
  VERIFY_SUBSCRIPTION_START,
  props<{ purchaseType: string; payload: any }>()
);

export const verifySubscriptionSuccess = createAction(
  VERIFY_SUBSCRIPTION_SUCCESS,
  props<{ details: any }>()
);
