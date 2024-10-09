import { Component } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritosService } from '../../servicios/favoritos.service'; // Importa el servicio de favoritos

@Component({
  selector: 'app-producto3',
  templateUrl: './producto3.page.html',
  styleUrls: ['./producto3.page.scss'],
})
export class Producto3Page {
  producto = {
    nombre: 'Pulsera artesanal',
    precio: 7999,
    descripcion: 'Pulsera con piedras artesanales',
    imagen: '/assets/icon/producto3.png'
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
