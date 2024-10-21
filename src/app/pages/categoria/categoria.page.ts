import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Agregamos Router
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

  constructor(private route: ActivatedRoute, private dbService: DbService, private router: Router) {} // Agregamos el Router aquí

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadCategoria(id);
      this.loadProductos();
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

  async loadProductos() {
    this.productos = await this.dbService.getProductos(); // Incluye la imagen en Base64
  }

  // Método para navegar a la página de detalles del producto
  verProducto(id_producto: number) {
    this.router.navigate(['/productos', id_producto]); // Redirige a la página de detalles del producto
  }
}
