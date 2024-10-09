import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private productosFavoritos: any[] = [];

  constructor() {}

  agregarAFavoritos(producto: any) {
    if (!this.productosFavoritos.find(p => p.nombre === producto.nombre)) {
      this.productosFavoritos.push(producto);
      console.log('Producto agregado a favoritos:', producto); // Para verificar
    }
  }

  obtenerFavoritos() {
    return this.productosFavoritos;
  }
}
