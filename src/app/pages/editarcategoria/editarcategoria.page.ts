import { Component, OnInit } from '@angular/core';
import { DbService } from '../../servicios/db.service';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-editarcategoria',
  templateUrl: './editarcategoria.page.html',
  styleUrls: ['./editarcategoria.page.scss'],
})
export class EditarCategoriaPage implements OnInit {
  categorias: Categoria[] = [];

  constructor(private dbService: DbService) {}

  ngOnInit() {
    this.loadCategorias();
  }

  async loadCategorias() {
    this.categorias = await this.dbService.getCategorias();
  }

  async addCategoria() {
    const nuevaCategoria: Categoria = {
      id_categoria: 0, // El ID se autogenera en la base de datos
      nombre: 'Nueva Categoría',
      imagen: '/assets/icon/categoria2.jfif'
    };
    await this.dbService.addCategoria(nuevaCategoria);
    this.loadCategorias();
  }

  async updateCategoria(categoria: Categoria) {
    await this.dbService.updateCategoria(categoria);
    this.loadCategorias();
  }

  async deleteCategoria(categoria: Categoria) {
    await this.dbService.deleteCategoria(categoria.id_categoria);
    this.loadCategorias();
  }
  
}
