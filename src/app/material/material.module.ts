import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {
  MatDrawerContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';

@NgModule({
  imports: [
    MatSliderModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
  ],
  exports: [
    MatSliderModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
  ],
  providers: [MatDrawerContainer],
})
export class MaterialModule {}
