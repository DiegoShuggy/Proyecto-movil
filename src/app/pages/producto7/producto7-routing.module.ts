import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Producto7Page } from './producto7.page';

const routes: Routes = [
  {
    path: '',
    component: Producto7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Producto7PageRoutingModule {}
