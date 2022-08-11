import { Component, ComponentRef } from '@angular/core';

@Component({
  selector: 'my-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
  toggleValue = 'center';
}
