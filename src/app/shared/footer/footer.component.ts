import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../enum/lenguage.enum';

@Component({
  selector: 'paradiso-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(public translateServ: TranslateService) {
    translateServ.setDefaultLang(Language.EN);
    translateServ.use(Language.EN);
  }

  changeLanguage(){
    if(this.translateServ.currentLang === Language.EN){
      this.translateServ.use(Language.KA)
    }else{
      this.translateServ.use(Language.EN)
    }
  }
}
