import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarCategoriaPage } from './editarcategoria.page'; // Asegúrate de que el nombre está correctamente capitalizado

const routes: Routes = [
  {
    path: '',
    component: EditarCategoriaPage // Asegúrate de que el nombre está correctamente capitalizado
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarcategoriaPageRoutingModule {}
