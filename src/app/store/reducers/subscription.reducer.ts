import { getSubscriptionsSuccess } from '../actions/subscription.action';

import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/subscription.state';

const _subscriptionReducer = createReducer(
  initialState,
  on(getSubscriptionsSuccess, (state, action) => {
    return {
      ...state,
      subscriptions: action.subscriptions,
    };
  })
);

export function SubscriptionReducer(state: any, action: any) {
  return _subscriptionReducer(state, action);
}
