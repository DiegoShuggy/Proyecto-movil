import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private productos: any[] = [];

  constructor() {}

  agregarProducto(producto: any) {
    this.productos.push(producto);
  }

  obtenerProductos() {
    return this.productos;
  }

  obtenerTotal() {
    return this.productos.reduce((total, producto) => total + producto.precio, 0);
  }
}
