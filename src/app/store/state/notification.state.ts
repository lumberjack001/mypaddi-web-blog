export interface NotificationState {
  notifications: any[] | null;
  unreadNotifications: any;
}
  
  export const initialState: NotificationState = {
  notifications: null,
  unreadNotifications: null
};
  