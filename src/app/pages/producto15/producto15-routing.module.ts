import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Producto15Page } from './producto15.page';

const routes: Routes = [
  {
    path: '',
    component: Producto15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Producto15PageRoutingModule {}
