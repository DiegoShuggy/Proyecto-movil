import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private favoritos: any[] = [];

  constructor() {}

  agregarAFavoritos(producto: any) {
    this.favoritos.push(producto);
  }

  eliminarDeFavoritos(producto: any) {
    this.favoritos = this.favoritos.filter(p => p.nombre !== producto.nombre);
  }

  existeEnFavoritos(producto: any): boolean {
    return this.favoritos.some(p => p.nombre === producto.nombre);
  }

  obtenerFavoritos() {
    return this.favoritos;
  }
}
