import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionCategoriasPage } from './gestion-categorias.page';

const routes: Routes = [
  {
    path: '',
    component: GestionCategoriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionCategoriasPageRoutingModule {}
