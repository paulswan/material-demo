import { Component } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  $mode = this.sidenavService.$mode;
  $hasBackdrop = this.sidenavService.$hasBackdrop;

  constructor(private sidenavService: SidenavService) {}

  setMode(mode: MatDrawerMode) {
    console.log(mode);
    this.sidenavService.setMode(mode);
  }

  setHasBackdrop(hasBackdrop: boolean) {
    console.log(hasBackdrop);
    this.sidenavService.setHasBackdrop(hasBackdrop);
  }
}
