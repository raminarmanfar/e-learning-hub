import { Component, Output, EventEmitter } from '@angular/core';
import { Languages } from '../models/enums/languages.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() public changeLang = new EventEmitter<string>();

  get en() { return Languages.EN; }
  get fa() { return Languages.FA; }

  changeLanguage(selectedLang: Languages) {
    this.changeLang.emit(selectedLang);
  }
}
