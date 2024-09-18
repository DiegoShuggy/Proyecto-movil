import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarcPage } from './recuperarc.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarcPageRoutingModule {}
