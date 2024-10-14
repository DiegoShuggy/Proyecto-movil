import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../models/producto';
import { DbService } from '../../servicios/db.service';
import { FavoritosService } from '../../servicios/favoritos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  producto: Producto | null = null; // Inicializado como null

  constructor(
    private route: ActivatedRoute,
    private db: DbService,
    private favoritosService: FavoritosService
  ) {}

  ngOnInit() {
    const id = +(this.route.snapshot.paramMap.get('id') ?? 0); // Usar coalescencia nula para proporcionar un valor predeterminado
    this.db.getProductoById(id).then((producto: Producto | null) => {
      if (producto) {
        this.producto = producto;
      }
    }).catch(error => {
      console.error('Error obteniendo producto:', error);
    });
  }

  async addToCart() {
    if (this.producto) {
      const id_producto = this.producto.id_producto; // ID del producto que deseas añadir
      const cantidad = 1; // Cantidad del producto
      await this.db.addToCart(id_producto, cantidad);
    }
  }

  agregarAFavoritos() {
    if (this.producto) {
      this.favoritosService.agregarAFavoritos(this.producto);
    }
  }
}
