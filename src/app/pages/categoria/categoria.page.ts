import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../../servicios/db.service';
import { Categoria } from '../../models/categoria';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {
  categoria: Categoria | undefined;
  productos: Producto[] = [];

  constructor(private route: ActivatedRoute, private dbService: DbService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadCategoria(id);
      this.loadProductos(parseInt(id, 10));
    }
  }

  async loadCategoria(id: string) {
    try {
      const categorias = await this.dbService.getCategorias();
      this.categoria = categorias.find(cat => cat.id_categoria === parseInt(id, 10));
    } catch (error) {
      console.error('Error loading category:', error);
    }
  }

  async loadProductos(idCategoria: number) {
    try {
      const productos = await this.dbService.getProductos();
      this.productos = productos.filter(prod => prod.id_tipo_producto === idCategoria);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  }
}
