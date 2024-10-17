import { Component, OnInit } from '@angular/core';
import { DbService } from '../../servicios/db.service';
import { ProductosService } from '../../servicios/productos.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-producto1',
  templateUrl: './producto1.page.html',
  styleUrls: ['./producto1.page.scss'],
})
export class Producto1Page implements OnInit {
  producto = {
    id: 1,
    nombre: 'Collar de pompones',
    precio: 9999,
    descripcion: 'Bisutería artesanal, Collar de colores vivos con piedras de plástico',
    imagen: '/assets/icon/producto1.png' // Imagen por defecto
  };

  imagenProducto: any;

  constructor(
    private dbService: DbService,
    private productosService: ProductosService,
    private sanitizer: DomSanitizer
  ) {}

  async ngOnInit() {
    // Inicializar SQLite y cargar productos
    await this.dbService.initDb();
    this.convertBlobToImage(); // Cargar imagen del producto en Blob
  }

  // Convertir Blob a imagen
  convertBlobToImage() {
    const blob = new Blob(); // Simulación de obtención de Blob
    const objectURL = URL.createObjectURL(blob);
    this.imagenProducto = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  // Añadir al carrito y calcular total
  async addToCart() {
    const cantidad = 1; // Cantidad del producto
    await this.dbService.addToCart(this.producto.id, cantidad);
  }

  // Añadir producto a favoritos y persistir con SQLite
  async agregarAFavoritos() {
    await this.dbService.addToFavorites(this.producto);
  }
}
