import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Producto5Page } from './producto5.page';

const routes: Routes = [
  {
    path: '',
    component: Producto5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Producto5PageRoutingModule {}
