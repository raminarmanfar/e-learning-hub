import { Component, Output, EventEmitter } from '@angular/core';
import { Languages } from '../models/enums/languages.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentLang = Languages.EN;

  @Output() public changeLang = new EventEmitter<string>();

  get nextLang() { return this.currentLang === Languages.EN ? Languages.FA : Languages.EN };

  changeLanguage() {
    this.currentLang = this.currentLang === Languages.EN ? Languages.FA : Languages.EN;
    this.changeLang.emit(this.currentLang);
  }
}
