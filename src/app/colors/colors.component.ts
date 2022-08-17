import { Component } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent {
  cocoonDataColors = ['light-primary-900', 'light-accent-200', 'light-warn-300'];
}
