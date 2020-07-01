import { Languages } from './../models/enums/languages.enum';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TextDirection } from '../models/enums/text-direction.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  textDir: TextDirection

  constructor(private translateService: TranslateService) {
    this.textDir = TextDirection.LTR;
    this.translateService.addLangs([Languages.EN, Languages.FA]);
    this.translateService.setDefaultLang(Languages.EN);
    // translateService.get('header-title').subscribe(res => console.log(res));
  }

  onLanguageChange(selectedLang: Languages) {
    this.translateService.use(selectedLang);
    this.textDir = selectedLang === Languages.EN ? TextDirection.LTR : TextDirection.RTL;
  }
}
