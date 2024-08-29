import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Categoria3Page } from './categoria3.page';

const routes: Routes = [
  {
    path: '',
    component: Categoria3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Categoria3PageRoutingModule {}
