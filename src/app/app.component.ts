import { Component,} from '@angular/core';
import { TranslationService } from './translation.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
  ],
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
