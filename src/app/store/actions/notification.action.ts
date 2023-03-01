import { createAction, props } from '@ngrx/store';
import * as NotificationInterface from '../../interfaces/notification.interface';

export const GET_NOTIFICATION_STATE = '[Notification] get notification Start';
export const GET_NOTIFICATION_SUCCESS =
  '[Notification] get notification Success';

export const ACCEPT_DECLINE_REQUEST_START =
  '[Notification] acceptordecline request Start';
export const ACCEPT_DECLINE_REQUEST_SUCCESS =
  '[Notification] acceptordecline request Success';

export const MARK_ALL_READ_START = '[Notification] mark all as read Start';
export const MARK_ALL_READ_SUCCESS = '[Notification] mark all as read Success';

export const getNotificationsStart = createAction(GET_NOTIFICATION_STATE);
export const getNotificationsSuccess = createAction(
  GET_NOTIFICATION_SUCCESS,
  props<{ notifications: any[]; unread: any }>()
);

export const acceptOrDeclineStart = createAction(
  ACCEPT_DECLINE_REQUEST_START,
  props<{ params: NotificationInterface.AcceptDecline }>()
);
export const acceptOrDeclineSuccess = createAction(
  ACCEPT_DECLINE_REQUEST_SUCCESS,
  props<{ params: any }>()
);

export const markAllStart = createAction(MARK_ALL_READ_START);
export const markAllSuccess = createAction(
  MARK_ALL_READ_SUCCESS,
  props<{ params: any }>()
);
