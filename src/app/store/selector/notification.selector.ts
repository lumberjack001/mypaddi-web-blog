import { createFeatureSelector, createSelector } from '@ngrx/store';
export const NOTIFICATION_STATE_NAME = 'notification';
const notificationSelector = createFeatureSelector<Notification>(
  NOTIFICATION_STATE_NAME
);

interface Notification {
  notifications: any[];
  unreadNotifications: any;
}

export const getNotifications = createSelector(
  notificationSelector,
  (state) => {
    return state.notifications;
  }
);

export const getUnreadNotifications = createSelector(
  notificationSelector,
  (state) => {
    return state.unreadNotifications;
  }
);
