import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FavoritosPageRoutingModule } from './favoritos-routing.module';
import { FavoritosPage } from './favoritos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritosPageRoutingModule // Asegúrate de tener este módulo de enrutamiento
  ],
  declarations: [FavoritosPage] // Declara la página de favoritos
})
export class FavoritosPageModule {}
