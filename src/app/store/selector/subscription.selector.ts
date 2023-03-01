export const SUBSCRIPTION_STATE_NAME = 'subscription';
import { createFeatureSelector, createSelector } from '@ngrx/store';
const subscriptionSelector = createFeatureSelector<subscription>(
  SUBSCRIPTION_STATE_NAME
);
interface subscription {
  subscriptions: any[];
}

export const getSubscriptions = createSelector(
  subscriptionSelector,
  (state) => {
    return state.subscriptions;
  }
);
