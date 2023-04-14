import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDrawerMode } from '@angular/material/sidenav';

import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  $mode = this.navigationService.$sidnavMode;
  $hasBackdrop = this.navigationService.$sidnavHasBackdrop;
  $toolbarColor = this.navigationService.$toolbarColor;

  constructor(private navigationService: NavigationService) {}

  setMode(mode: MatDrawerMode) {
    this.navigationService.setMode(mode);
  }

  setHasBackdrop(hasBackdrop: boolean) {
    this.navigationService.setHasBackdrop(hasBackdrop);
  }

  setToolbarColor(toolbarColor: ThemePalette) {
    this.navigationService.setToolbarColor(toolbarColor);
  }
}
