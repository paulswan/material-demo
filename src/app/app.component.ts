import { Component } from '@angular/core';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  opened = false;
  $mode = this.sidenavService.$mode;
  $hasBackdrop = this.sidenavService.$hasBackdrop;

  themeClass = 'light-theme';

  constructor(private sidenavService: SidenavService) {}

  changeTheme(theme) {
    const bodyElement = document.body;
    if (bodyElement) {
      // remove existing class (needed if theme is being changed)
      bodyElement.classList.remove(this.themeClass);
      // add new theme class
      bodyElement.classList.add(theme);
      this.themeClass = theme;
    }
  }
}
