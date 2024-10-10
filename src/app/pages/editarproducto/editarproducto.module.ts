import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditarProductoPageRoutingModule } from './editarproducto-routing.module';
import { EditarProductoPage } from './editarproducto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarProductoPageRoutingModule
  ],
  declarations: [EditarProductoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditarProductoPageModule {}
