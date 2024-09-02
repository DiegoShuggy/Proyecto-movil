import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Producto12Page } from './producto12.page';

const routes: Routes = [
  {
    path: '',
    component: Producto12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Producto12PageRoutingModule {}
