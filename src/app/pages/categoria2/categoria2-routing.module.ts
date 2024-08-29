import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Categoria2Page } from './categoria2.page';

const routes: Routes = [
  {
    path: '',
    component: Categoria2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Categoria2PageRoutingModule {}
