import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddressFormComponent } from './address-form/address-form.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CheckboxRadioComponent } from './checkbox-radio/checkbox-radio.component';
import { ColorsComponent } from './colors/colors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { InputsComponent } from './inputs/inputs.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OtherComponent } from './other/other.component';
import { ProgressComponent } from './progress/progress.component';
import { SlidersComponent } from './sliders/sliders.component';
import { TabStepperComponent } from './tab-stepper/tab-stepper.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'navigation',
  },
  {
    path: 'navigation',
    component: NavigationComponent,
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
  },
  {
    path: 'colors',
    component: ColorsComponent,
  },
  {
    path: 'typography',
    component: TypographyComponent,
  },
  {
    path: 'checkbox-radio',
    component: CheckboxRadioComponent,
  },
  {
    path: 'inputs',
    component: InputsComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'address-form',
    component: AddressFormComponent,
  },
  {
    path: 'tree',
    component: TreeComponent,
  },
  {
    path: 'drag-drop',
    component: DragDropComponent,
  },
  {
    path: 'cards',
    component: CardsComponent,
  },
  {
    path: 'progress',
    component: ProgressComponent,
  },
  {
    path: 'tab-stepper',
    component: TabStepperComponent,
  },
  {
    path: 'sliders',
    component: SlidersComponent,
  },
  {
    path: 'other',
    component: OtherComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
