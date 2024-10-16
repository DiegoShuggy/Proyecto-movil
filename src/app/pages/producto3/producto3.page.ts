import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritosService } from '../../servicios/favoritos.service'; // Importa el servicio de favoritos
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-producto3',
  templateUrl: './producto3.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class Producto2Page implements OnInit {
  producto = {
    nombre: 'Collar de piedras artesanales',
    precio: 14999,
    descripcion: 'Collar con piedras y joyas artesanales',
    imagen: '/assets/icon/producto2.png'
  };

  productos: any[] = [];

  constructor(
    private carritoService: CarritoService,
    private favoritosService: FavoritosService,
    private productosService: ProductosService
  ) {}

  ngOnInit() {
    // Cargar productos desde el servicio de productos
    this.productos = this.productosService.obtenerProductos();
  }

  agregarAlCarrito() {
    this.carritoService.agregarProducto(this.producto);
    console.log('Producto agregado al carrito:', this.producto); // Para verificar
  }

  agregarAFavoritos() {
    this.favoritosService.agregarAFavoritos(this.producto);
    console.log('Producto agregado a favoritos:', this.producto); // Para verificar
  }

  // Métodos para agregar, editar y eliminar productos
  agregarProducto() {
    const nuevoProducto = {
      nombre: 'Producto Nuevo',
      precio: 1999,
      descripcion: 'Descripción del producto nuevo',
      imagen: '/assets/icon/nuevoProducto.png'
    };
    this.productosService.agregarProducto(nuevoProducto);
  }

  editarProducto(id: number) {
    const productoEditado = {
      nombre: 'Nombre Editado',
      precio: 2999
    };
    this.productosService.editarProducto(id, productoEditado);
  }

  eliminarProducto(id: number) {
    this.productosService.eliminarProducto(id);
  }
}
