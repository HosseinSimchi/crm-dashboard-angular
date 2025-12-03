import { counterFeature } from './states/counter/counter.reducer';
import { headerFeature } from './states/header/header.reducer';
import { notificationFeature } from './states/notification/notification.reducer';

export const AppReducers = {
  counter: counterFeature.reducer,
  header: headerFeature.reducer,
  notification: notificationFeature.reducer,
};
