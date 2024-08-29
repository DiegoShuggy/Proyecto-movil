import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Categoria1Page } from './categoria1.page';

const routes: Routes = [
  {
    path: '',
    component: Categoria1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Categoria1PageRoutingModule {}
