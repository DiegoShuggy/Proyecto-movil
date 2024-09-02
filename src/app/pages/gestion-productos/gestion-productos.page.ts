import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.page.html',
  styleUrls: ['./gestion-productos.page.scss'],
})
export class GestionProductosPage {

  constructor(private alertController: AlertController) {}

  async editProduct(productName: string) {
    const alert = await this.alertController.create({
      header: 'Producto Editado',
      message: `Has editado el producto: ${productName}.`,
      buttons: ['OK']
    });
    await alert.present();
  }

  async deleteProduct(productName: string) {
    const alert = await this.alertController.create({
      header: 'Producto Eliminado',
      message: `Has eliminado el producto: ${productName}.`,
      buttons: ['OK']
    });
    await alert.present();
  }
}
