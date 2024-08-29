import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Producto3Page } from './producto3.page';

const routes: Routes = [
  {
    path: '',
    component: Producto3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Producto3PageRoutingModule {}
