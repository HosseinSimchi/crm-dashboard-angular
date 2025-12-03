import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { notificationFeature } from '../../store/states/notification/notification.reducer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent {
  store = inject(Store);
  notificationState$ = this.store.select(notificationFeature.selectNotificationState);
}
