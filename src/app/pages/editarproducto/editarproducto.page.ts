import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DbService } from '../../servicios/db.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-editarproducto',
  templateUrl: './editarproducto.page.html',
  styleUrls: ['./editarproducto.page.scss'],
})
export class EditarProductoPage implements OnInit {
  productos: Producto[] = [];

  constructor(private dbService: DbService, private alertController: AlertController) {}

  ngOnInit() {
    this.loadProductos();
  }

  async loadProductos() {
    this.productos = await this.dbService.getProductos();
  }

  async confirmAddProducto() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que deseas añadir un nuevo producto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Añadir',
          handler: () => {
            this.addProducto();
          },
        },
      ],
    });

    await alert.present();
  }

  async addProducto() {
    const nuevoProducto: Producto = {
      id_producto: 0, // El ID se autogenera en la base de datos
      Nombre: 'Nuevo Producto',
      Precio: 0,
      Descripcion: 'Descripción del Producto',
      Imagen: '/assets/icon/default.png', // Ruta de la imagen por defecto
      id_tipo_producto: 1, // ID de tipo de producto por defecto
    };
    await this.dbService.addProducto(nuevoProducto);
    this.loadProductos();
  }

  async confirmUpdateProducto(producto: Producto) {
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
            this.updateProducto(producto);
          },
        },
      ],
    });

    await alert.present();
  }

  async updateProducto(producto: Producto) {
    await this.dbService.updateProducto(producto);
    this.loadProductos();
  }

  async confirmDeleteProducto(producto: Producto) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que deseas eliminar este producto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.deleteProducto(producto);
          },
        },
      ],
    });

    await alert.present();
  }

  async deleteProducto(producto: Producto) {
    await this.dbService.deleteProducto(producto.id_producto);
    this.loadProductos();
  }
}
