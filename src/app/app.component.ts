import { Component, computed, signal } from '@angular/core';
import { TranslationService } from './translation.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
}
