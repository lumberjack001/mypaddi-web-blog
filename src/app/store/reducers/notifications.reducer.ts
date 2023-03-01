import { getNotificationsSuccess } from '../actions/notification.action';

import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/notification.state';

const _notificationReducer = createReducer(
  initialState,
  on(getNotificationsSuccess, (state, action) => {
    return {
      ...state,
      notifications: action.notifications,
      unreadNotifications: action.unread,
    };
  })
);

export function NotificationReducer(state: any, action: any) {
  return _notificationReducer(state, action);
}
