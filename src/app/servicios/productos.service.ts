import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos = [
    {
      id: 1,
      nombre: 'Collar de pompones',
      precio: 9999,
      descripcion: 'Bisutería artesanal, Collar de colores vivos con piedras de plástico',
      imagen: '/assets/icon/producto1.png'
    },
    // Añadir más productos aquí
  ];

  constructor() {}

  obtenerProductos() {
    return this.productos;
  }

  agregarProducto(producto: any) {
    this.productos.push({ id: this.productos.length + 1, ...producto });
  }

  editarProducto(id: number, productoEditado: any) {
    const index = this.productos.findIndex(prod => prod.id === id);
    if (index !== -1) {
      this.productos[index] = { ...this.productos[index], ...productoEditado };
    }
  }

  eliminarProducto(id: number) {
    this.productos = this.productos.filter(prod => prod.id !== id);
  }
}
