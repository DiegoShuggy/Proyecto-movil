import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Producto14Page } from './producto14.page';

const routes: Routes = [
  {
    path: '',
    component: Producto14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Producto14PageRoutingModule {}
