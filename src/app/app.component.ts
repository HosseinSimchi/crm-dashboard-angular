import { Component, computed, inject, signal } from '@angular/core';
import { TranslationService } from './translation.service';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CounterActions } from './store/states/counter/counter.actions';
import { counterFeature } from './store/states/counter/counter.reducer';
import { headerFeature } from './store/states/header/header.reducer';
import { HeaderComponent } from './components/header/header.component';
import { SubHeaderComponent } from "./components/sub-header/sub-header.component";
import { OrderChartComponent } from "./components/order-chart/order-chart.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, HeaderComponent, SubHeaderComponent, OrderChartComponent],
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
}
