import { Component } from '@angular/core';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  opened = true;
  $mode = this.sidenavService.$mode;
  $hasBackdrop = this.sidenavService.$hasBackdrop;

  constructor(private sidenavService: SidenavService) {}
}
