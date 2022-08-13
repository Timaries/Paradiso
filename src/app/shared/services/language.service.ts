import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../enum/lenguage.enum';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translateServ: TranslateService) {
    translateServ.setDefaultLang(Language.EN);
    translateServ.use(Language.EN);
  }
  changeLanguage() {
    if (this.translateServ.currentLang === Language.EN) {
      this.translateServ.use(Language.KA);
    } else {
      this.translateServ.use(Language.EN);
    }
  }
}
