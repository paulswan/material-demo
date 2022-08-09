import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressFormComponent } from './address-form/address-form.component';

import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CheckboxRadioComponent } from './checkbox-radio/checkbox-radio.component';
import { ColorsComponent } from './colors/colors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { HomeComponent } from './home/home.component';
import { InputsComponent } from './inputs/inputs.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
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
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
