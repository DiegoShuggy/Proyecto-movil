import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Producto10Page } from './producto10.page';

const routes: Routes = [
  {
    path: '',
    component: Producto10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Producto10PageRoutingModule {}
