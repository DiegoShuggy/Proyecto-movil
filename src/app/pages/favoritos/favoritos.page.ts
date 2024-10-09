import { Component } from '@angular/core';
import { FavoritosService } from '../../servicios/favoritos.service'; // Asegúrate de importar el servicio

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage {
  productosFavoritos: any[] = [];

  constructor(private favoritosService: FavoritosService) {
    this.productosFavoritos = this.favoritosService.obtenerFavoritos();
  }
}
