import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { userInfoFeature } from '../../../store/states/user-info/user-info.reducer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-info',
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
})
export class UserInfoComponent {
  store = inject(Store);

  userInfoState$ = this.store.select(userInfoFeature.selectUserInfoState);
}
