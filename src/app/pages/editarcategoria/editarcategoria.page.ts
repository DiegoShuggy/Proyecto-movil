import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DbService } from '../../servicios/db.service';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-editarcategoria',
  templateUrl: './editarcategoria.page.html',
  styleUrls: ['./editarcategoria.page.scss'],
})
export class EditarCategoriaPage implements OnInit {
  categorias: Categoria[] = [];

  constructor(private dbService: DbService, private alertController: AlertController) {}

  ngOnInit() {
    this.loadCategorias();
  }

  async loadCategorias() {
    this.categorias = await this.dbService.getCategorias();
  }

  async confirmAddCategoria() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que deseas añadir una nueva categoría?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Añadir',
          handler: () => {
            this.addCategoria();
          },
        },
      ],
    });

    await alert.present();
  }

  async addCategoria() {
    const nuevaCategoria: Categoria = {
      id_categoria: 0, // El ID se autogenera en la base de datos
      nombre: 'Nueva Categoría',
      imagen: '/assets/icon/categoria2.jfif', // Ruta de la imagen por defecto
    };
    await this.dbService.addCategoria(nuevaCategoria);
    this.loadCategorias();
  }

  async confirmUpdateCategoria(categoria: Categoria) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que deseas guardar los cambios?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Guardar',
          handler: () => {
            this.updateCategoria(categoria);
          },
        },
      ],
    });

    await alert.present();
  }

  async updateCategoria(categoria: Categoria) {
    await this.dbService.updateCategoria(categoria);
    this.loadCategorias();
  }

  async confirmDeleteCategoria(categoria: Categoria) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que deseas eliminar esta categoría?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.deleteCategoria(categoria);
          },
        },
      ],
    });

    await alert.present();
  }

  async deleteCategoria(categoria: Categoria) {
    // Asegúrate de que id_categoria no sea undefined antes de eliminar
    if (categoria.id_categoria !== undefined) { // Línea modificada
      await this.dbService.deleteCategoria(categoria.id_categoria);
      this.loadCategorias();
    }
  }
}
