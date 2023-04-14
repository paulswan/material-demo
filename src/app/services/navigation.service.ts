import { Injectable } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  $sidnavMode = new BehaviorSubject<MatDrawerMode>('side');
  $sidnavHasBackdrop = new BehaviorSubject<boolean>(false);
  $toolbarColor = new BehaviorSubject<ThemePalette>('primary');

  setMode(mode: MatDrawerMode) {
    this.$sidnavMode.next(mode);
  }

  setHasBackdrop(hasBackdrop: boolean) {
    this.$sidnavHasBackdrop.next(hasBackdrop);
  }

  setToolbarColor(toolbarColor: ThemePalette) {
    this.$toolbarColor.next(toolbarColor);
  }
}
