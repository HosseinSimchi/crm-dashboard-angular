import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { headerFeature } from '../../store/states/header/header.reducer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    FormsModule,
    NotificationComponent,
    UserInfoComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  store = inject(Store);
  searchPlaceholder$ = this.store.select(headerFeature.selectSearchPlaceholder);
  languageSelection$ = this.store.select(headerFeature.selectLanguageSelection);
}
