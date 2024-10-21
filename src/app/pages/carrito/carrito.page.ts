import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: any[] = [];

  constructor() {}

  // Agregar producto al carrito con la cantidad
  agregarProducto(producto: any, cantidad: number) {
    const productoExistente = this.carrito.find(p => p.nombre === producto.nombre);
    if (productoExistente) {
      productoExistente.cantidad += cantidad; // Aumentar la cantidad si ya existe
    } else {
      this.carrito.push({ ...producto, cantidad });
    }
    this.guardarCarrito(); // Guardar el carrito actualizado
  }

  // Eliminar producto del carrito
  eliminarProducto(producto: any) {
    this.carrito = this.carrito.filter(p => p.nombre !== producto.nombre);
    this.guardarCarrito(); // Guardar el carrito actualizado
  }

  // Modificar cantidad de un producto
  modificarCantidad(producto: any, cantidad: number) {
    const productoExistente = this.carrito.find(p => p.nombre === producto.nombre);
    if (productoExistente && (productoExistente.cantidad + cantidad > 0)) {
      productoExistente.cantidad += cantidad;
    }
    this.guardarCarrito(); // Guardar cambios en la cantidad
  }

  // Obtener productos en el carrito
  obtenerCarrito() {
    return this.carrito;
  }

  // Calcular el costo total
  obtenerTotal() {
    return this.carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  }

  // Guardar carrito en almacenamiento local para persistencia
  private guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  // Cargar carrito desde almacenamiento local
  cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      this.carrito = JSON.parse(carritoGuardado);
    }
  }
}
