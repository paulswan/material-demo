import { Component } from '@angular/core';

import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  opened = true;
  $mode = this.navigationService.$sidnavMode;
  $hasBackdrop = this.navigationService.$sidnavHasBackdrop;
  $toolbarColor = this.navigationService.$toolbarColor;

  themeClass = 'nextdc-light-theme';

  constructor(private navigationService: NavigationService) {}

  changeTheme(theme: string) {
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
