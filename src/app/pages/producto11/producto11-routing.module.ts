import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Producto11Page } from './producto11.page';

const routes: Routes = [
  {
    path: '',
    component: Producto11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Producto11PageRoutingModule {}
