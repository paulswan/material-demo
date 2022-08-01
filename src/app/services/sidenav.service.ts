import { Injectable } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  $mode = new BehaviorSubject<MatDrawerMode>('push');
  $hasBackdrop = new BehaviorSubject<boolean>(false);

  setMode(mode: MatDrawerMode) {
    this.$mode.next(mode);
  }

  setHasBackdrop(hasBackdrop: boolean) {
    this.$hasBackdrop.next(hasBackdrop);
  }
}
