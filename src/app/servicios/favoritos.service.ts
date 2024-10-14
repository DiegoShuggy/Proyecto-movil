import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {
  private productosFavoritos: any[] = [];

  constructor() {}

  agregarAFavoritos(producto: any) {
    this.productosFavoritos.push(producto);
  }

  eliminarDeFavoritos(producto: any) {
    const index = this.productosFavoritos.findIndex(p => p.id_producto === producto.id_producto);
    if (index > -1) {
      this.productosFavoritos.splice(index, 1);
    }
  }

  obtenerFavoritos() {
    return this.productosFavoritos;
  }
}
