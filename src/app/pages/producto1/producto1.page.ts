import { Component } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritosService } from '../../servicios/favoritos.service'; // Importa el servicio de favoritos

@Component({
  selector: 'app-producto1',
  templateUrl: './producto1.page.html',
  styleUrls: ['./producto1.page.scss'],
})
export class Producto1Page {
  producto = {
    nombre: 'Collar de pompones',
    precio: 9999,
    descripcion: 'Bisutería artesanal, Collar de colores vivos con piedras de plástico',
    imagen: '/assets/icon/producto1.png'
  };

  constructor(private carritoService: CarritoService, private favoritosService: FavoritosService) {}

  agregarAlCarrito() {
    this.carritoService.agregarProducto(this.producto);
    console.log('Producto agregado al carrito:', this.producto); // Para verificar
  }

  agregarAFavoritos() {
    this.favoritosService.agregarAFavoritos(this.producto);
    console.log('Producto agregado a favoritos:', this.producto); // Para verificar
  }
}
