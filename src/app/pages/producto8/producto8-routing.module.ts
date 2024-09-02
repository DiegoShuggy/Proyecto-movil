import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Producto8Page } from './producto8.page';

const routes: Routes = [
  {
    path: '',
    component: Producto8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Producto8PageRoutingModule {}
