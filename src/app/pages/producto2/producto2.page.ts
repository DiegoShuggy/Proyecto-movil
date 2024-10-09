import { Component } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritosService } from '../../servicios/favoritos.service'; // Importa el servicio de favoritos

@Component({
  selector: 'app-producto2',
  templateUrl: './producto2.page.html',
  styleUrls: ['./producto2.page.scss'],
})
export class Producto2Page {
  producto = {
    nombre: 'Collar de piedras artesanales',
    precio: 14999,
    descripcion: 'Collar con piedras y joyas artesanales',
    imagen: '/assets/icon/producto2.png'
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
