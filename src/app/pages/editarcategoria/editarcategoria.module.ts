import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EditarcategoriaPageRoutingModule } from './editarcategoria-routing.module';
import { EditarCategoriaPage } from './editarcategoria.page'; // Asegúrate de que el nombre está correctamente capitalizado

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarcategoriaPageRoutingModule
  ],
  declarations: [EditarCategoriaPage], // Asegúrate de que el nombre está correctamente capitalizado
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditarcategoriaPageModule {}
