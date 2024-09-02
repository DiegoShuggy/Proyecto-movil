import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Producto9Page } from './producto9.page';

const routes: Routes = [
  {
    path: '',
    component: Producto9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Producto9PageRoutingModule {}
