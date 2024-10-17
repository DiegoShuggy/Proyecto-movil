import { Component, OnInit } from '@angular/core';
import { DbService } from '../../servicios/db.service';
import { FavoritosService } from '../../servicios/favoritos.service';
import { ProductosService } from '../../servicios/productos.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Storage } from '@ionic/storage-angular';

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
    imagen: '/assets/icon/producto1.png' // Imagen por defecto
  };

  imagenProducto: any; // Imagen convertida desde Blob
  productos: any[] = [];
  total: number = 0;

  constructor(
    private dbService: DbService,
    private favoritosService: FavoritosService,
    private productosService: ProductosService,
    private sanitizer: DomSanitizer,
    private storage: Storage
  ) { }

  ngOnInit() {
    // Inicializar almacenamiento y cargar productos
    this.initStorage();
    this.productos = this.productosService.obtenerProductos();
    this.convertBlobToImage(); // Cargar imagen del producto en Blob
  }

  async initStorage() {
    await this.storage.create();
  }

  // Convertir Blob a imagen
  convertBlobToImage() {
    // Aquí simularías obtener el blob desde tu API o almacenamiento
    const blob = new Blob(); // Suponiendo que obtienes el blob aquí
    const objectURL = URL.createObjectURL(blob);
    this.imagenProducto = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  // Añadir al carrito y calcular total
  async addToCart() {
    const id_producto = 1; // ID del producto que deseas añadir
    const cantidad = 1; // Cantidad del producto
    await this.dbService.addToCart(id_producto, cantidad);
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.productosService.obtenerProductos().reduce((acc, producto) => acc + producto.precio, 0);
  }

  // Añadir producto a favoritos y persistir
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
