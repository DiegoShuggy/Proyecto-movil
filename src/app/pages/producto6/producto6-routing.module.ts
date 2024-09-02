import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Producto6Page } from './producto6.page';

const routes: Routes = [
  {
    path: '',
    component: Producto6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Producto6PageRoutingModule {}
