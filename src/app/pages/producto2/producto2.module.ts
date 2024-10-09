import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Producto2PageRoutingModule } from './producto2-routing.module';
import { Producto2Page } from './producto2.page';
import { CarritoService } from '../../servicios/carrito.service'; // Asegúrate de importar el servicio

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Producto2PageRoutingModule
  ],
  declarations: [Producto2Page],
  providers: [CarritoService] // Agregar el servicio aquí si aún no está
})
export class Producto2PageModule {}
