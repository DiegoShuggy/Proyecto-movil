import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Producto4Page } from './producto4.page';

const routes: Routes = [
  {
    path: '',
    component: Producto4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Producto4PageRoutingModule {}
