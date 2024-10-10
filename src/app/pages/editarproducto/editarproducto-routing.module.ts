import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarProductoPage } from './editarproducto.page';

const routes: Routes = [
  {
    path: '',
    component: EditarProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarProductoPageRoutingModule {}
