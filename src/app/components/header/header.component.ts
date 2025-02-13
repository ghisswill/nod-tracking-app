import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../shared/services/translate/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  
  lang: string = '';

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.lang = this.translationService.defaultLang.toUpperCase();
  }

  changeLang(lang: string) {
    this.translationService.switchLanguage(lang);
    this.lang = lang.toUpperCase();
  }

}