import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionCategoriasPageRoutingModule } from './gestion-categorias-routing.module';

import { GestionCategoriasPage } from './gestion-categorias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionCategoriasPageRoutingModule
  ],
  declarations: [GestionCategoriasPage]
})
export class GestionCategoriasPageModule {}
