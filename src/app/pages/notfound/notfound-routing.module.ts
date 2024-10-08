import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundPage } from './notfound.page'; // Usa el nombre correcto

const routes: Routes = [
  {
    path: '',
    component: NotfoundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotfoundPageRoutingModule {}
