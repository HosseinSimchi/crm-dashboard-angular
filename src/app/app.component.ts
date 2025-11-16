import { Component, computed, inject, signal } from '@angular/core';
import { TranslationService } from './translation.service';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CounterActions } from './store/states/counter/counter.actions';
import { counterFeature } from './store/states/counter/counter.reducer';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  selectedLanguage = { code: 'en', name: 'English' };
  title = '';
  languages = [
    {
      code: 'en',
      name: 'English',
    },
    {
      code: 'fr',
      name: 'France',
    },
    {
      code: 'hi',
      name: 'Hindi',
    },
  ];

  constructor(public translationService: TranslationService) {
    this.translationService.loadTranslations('en');
  }

  selectLanguage(language: any) {
    this.selectedLanguage = language;
    this.translationService.loadTranslations(language.code);
  }

  getState: any;

  ngOnInit(): void {}

  store = inject(Store);

  value$: Observable<number> = this.store.select(counterFeature.selectValue);
  customAmount: number = 5;

  increment() {
    this.store.dispatch(
      CounterActions.increment({ amount: this.customAmount })
    );
  }

  decrement() {
    this.store.dispatch(
      CounterActions.decrement({ amount: this.customAmount })
    );
  }

  reset() {
    this.store.dispatch(CounterActions.reset({})); // resets to 0
  }

  resetToCustom() {
    this.store.dispatch(CounterActions.reset({ value: this.customAmount }));
  }
}
