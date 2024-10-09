import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private favoritos: any[] = [];

  constructor() { }

  agregarFavorito(producto: any) {
    this.favoritos.push(producto);
  }

  obtenerFavoritos() {
    return this.favoritos;
  }

  eliminarFavorito(index: number) {
    this.favoritos.splice(index, 1);
  }
}
