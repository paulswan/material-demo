import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
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
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
