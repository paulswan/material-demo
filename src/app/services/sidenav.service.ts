import { Injectable } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  $mode = new BehaviorSubject<MatDrawerMode>('over');
  $hasBackdrop = new BehaviorSubject<boolean>(true);

  setMode(mode: MatDrawerMode) {
    this.$mode.next(mode);
  }

  setHasBackdrop(hasBackdrop: boolean) {
    this.$hasBackdrop.next(hasBackdrop);
  }
}
