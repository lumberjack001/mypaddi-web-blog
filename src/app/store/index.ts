import { userReducer, UserState } from './reducers/user.reducer';
import { SharedReducer } from '../Shared/store/loader.reducer';
import { ProfileReducer } from './reducers/profile.reducer';
import { SubscriptionReducer } from './reducers/subscription.reducer';
import { NotificationReducer } from './reducers/notifications.reducer';
import { BlogReducer } from './reducers/blog.reducer';
import { UnauthBlogReducer } from './reducers/unauth-blog.reducer';
import { UserDetailsReducer } from './reducers/user-details.reducer';
import { ChatReducer } from './reducers/chat.reducer';
import { ThemeReducer } from './reducers/theme.reducer';



import { SHARED_STATE_NAME } from '../Shared/store/loader.selector';
import { PROFILE_STATE_NAME } from './selector/profile.selector';
import { NOTIFICATION_STATE_NAME } from './selector/notification.selector';
import { SUBSCRIPTION_STATE_NAME } from './selector/subscription.selector';
import { BLOG_STATE_NAME } from './selector/blog.selector';
import { UNAUTH_BLOG_STATE_NAME } from './selector/unauth-blog.selector'
import { USER_DETAILS_STATE_NAME } from './selector/user-details.selector'
import { CHAT_STATE_NAME } from './selector/chat.selector'
import { THEME_STATE_NAME } from './selector/theme.selector';



interface AppState {
  user: any;
  [SHARED_STATE_NAME]: any;
  [PROFILE_STATE_NAME]: any;
  [SUBSCRIPTION_STATE_NAME]: any;
  NOTIFICATION_STATE_NAME: any;
}

export const Appreducers = {
  // user: userReducer,
  [SHARED_STATE_NAME]: SharedReducer,
  [PROFILE_STATE_NAME]: ProfileReducer,
  [SUBSCRIPTION_STATE_NAME]: SubscriptionReducer,
  [NOTIFICATION_STATE_NAME]: NotificationReducer,
  [BLOG_STATE_NAME]: BlogReducer,
  [UNAUTH_BLOG_STATE_NAME]: UnauthBlogReducer,
  [USER_DETAILS_STATE_NAME]: UserDetailsReducer,
  [CHAT_STATE_NAME]: ChatReducer,
  [THEME_STATE_NAME]: ThemeReducer
};
