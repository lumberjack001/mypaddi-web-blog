import { createAction, props } from '@ngrx/store';
// import { User } from '../../interfaces/user.interface';

const TYPE = '[User]';

//----get profile
export const GetProfile = createAction(`${TYPE} Get Profile`);

//----set user details
export const SetUser = createAction(`${TYPE} Set User`, props<{ user : any}>());

//----boolean---get user
export const LoadingUser = createAction(`${TYPE} Loading User`);

//----remove user
export const ResetUser = createAction(`${TYPE} Reset User`);
