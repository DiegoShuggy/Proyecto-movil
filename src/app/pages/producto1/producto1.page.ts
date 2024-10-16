import { Component, OnInit } from '@angular/core';
import { DbService } from '../../servicios/db.service';
import { FavoritosService } from '../../servicios/favoritos.service';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-producto1',
  templateUrl: './producto1.page.html',
  styleUrls: ['./producto1.page.scss'],
})
export class Producto1Page implements OnInit {
  producto = {
    nombre: 'Collar de pompones',
    precio: 9999,
    descripcion: 'Bisutería artesanal, Collar de colores vivos con piedras de plástico',
    imagen: '/assets/icon/producto1.png'
  };

  productos: any[] = [];

  constructor(
    private dbService: DbService,
    private favoritosService: FavoritosService,
    private productosService: ProductosService
  ) { }

  ngOnInit() {
    // Cargar productos desde el servicio de productos
    this.productos = this.productosService.obtenerProductos();
  }

  async addToCart() {
    const id_producto = 1; // ID del producto que deseas añadir
    const cantidad = 1; // Cantidad del producto
    await this.dbService.addToCart(id_producto, cantidad);
  }

  agregarAFavoritos() {
    this.favoritosService.agregarAFavoritos(this.producto);
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
