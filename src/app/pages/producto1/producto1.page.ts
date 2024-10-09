import { Component, OnInit } from '@angular/core';
import { DbService } from '../../servicios/db.service';
import { FavoritosService } from '../../servicios/favoritos.service';

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

  constructor(
    private dbService: DbService,
    private favoritosService: FavoritosService
  ) { }

  ngOnInit() { }

  async addToCart() {
    const id_producto = 1; // ID del producto que deseas añadir
    const cantidad = 1; // Cantidad del producto
    await this.dbService.addToCart(id_producto, cantidad);
  }

  agregarAFavoritos() {
    this.favoritosService.agregarAFavoritos(this.producto);
  }
}
