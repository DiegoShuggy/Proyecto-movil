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

  eliminarProducto(producto: any) {
    const index = this.productos.findIndex(p => p.id_producto === producto.id_producto);
    if (index > -1) {
      this.productos.splice(index, 1);
    }
  }

  obtenerProductos() {
    return this.productos;
  }

  obtenerTotal() {
    return this.productos.reduce((total, producto) => total + producto.precio, 0);
  }
}
