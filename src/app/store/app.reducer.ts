import { counterFeature } from './states/counter/counter.reducer';
import { headerFeature } from './states/header/header.reducer';
import { notificationFeature } from './states/notification/notification.reducer';
import { subHeaderFeature } from './states/sub-header/sub-header.reducer';
import { userInfoFeature } from './states/user-info/user-info.reducer';

export const AppReducers = {
  counter: counterFeature.reducer,
  header: headerFeature.reducer,
  notification: notificationFeature.reducer,
  userInfo: userInfoFeature.reducer,
  subHeader: subHeaderFeature.reducer,
};
