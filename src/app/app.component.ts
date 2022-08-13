import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'paradiso-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Paradiso';
  constructor(public translateServ: TranslateService) {
    translateServ.setDefaultLang('ka');
    translateServ.use('ka');
  }
  changeLanguage() {
    if (this.translateServ.currentLang === 'en') {
      this.translateServ.use('ka');
    } else {
      this.translateServ.use('en');
    }
  }
}
