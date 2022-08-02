import { NgModule } from '@angular/core';

import { MatCommonModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDrawerContainer, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    MatCommonModule,
    MatSliderModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatBadgeModule,
    MatMenuModule,
    MatTooltipModule,
    MatChipsModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
  exports: [
    MatCommonModule,
    MatSliderModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatBadgeModule,
    MatMenuModule,
    MatTooltipModule,
    MatChipsModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
  providers: [MatDrawerContainer],
})
export class MaterialModule {}
