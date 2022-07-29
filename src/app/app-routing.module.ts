import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { ColorsComponent } from './colors/colors.component';
import { HelloComponent } from './hello.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'hello',
  },
  {
    path: 'hello',
    component: HelloComponent,
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
  },
  ,
  {
    path: 'colors',
    component: ColorsComponent,
  },
 
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
