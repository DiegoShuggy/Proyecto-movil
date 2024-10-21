// src/app/pages/productos/productos.page.ts
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
  productos: Producto[] = [];
  producto: Producto = {
    id_producto: 0,
    Nombre: '',
    Precio: 0,
    Descripcion: '',
    Imagen: new Blob(),
    id_categoria: 0 // Incluimos id_categoria por defecto
  };

  constructor(
    private route: ActivatedRoute,
    private db: DbService,
    private favoritosService: FavoritosService
  ) {}

  ngOnInit() {
    const id = +(this.route.snapshot.paramMap.get('id') ?? 0); // Usar coalescencia nula para proporcionar un valor predeterminado
    this.db.getProductoById(id).then((producto: Producto | null) => {
      if (producto) {
        // Asignar los valores correctamente
        this.producto = {
          id_producto: producto.id_producto,
          Nombre: producto.Nombre,
          Descripcion: producto.Descripcion,
          Precio: producto.Precio,
          Imagen: producto.Imagen,
          id_categoria: producto.id_categoria // Asegúrate de incluir el id_categoria
        };
      }
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
