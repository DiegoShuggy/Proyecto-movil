import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Producto13Page } from './producto13.page';

const routes: Routes = [
  {
    path: '',
    component: Producto13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Producto13PageRoutingModule {}
