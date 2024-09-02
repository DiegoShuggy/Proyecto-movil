import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.page.html',
  styleUrls: ['./gestion-productos.page.scss'],
})
export class GestionProductosPage implements OnInit, OnDestroy {

  constructor(
    private alertController: AlertController,
    private navCtrl: NavController,
    private menuController: MenuController,
    private router: Router
  ) {}

  ngOnInit() {
    // Deshabilita el menú lateral al ingresar a esta página
    this.menuController.enable(false);
  }

  ngOnDestroy() {
    // Habilita el menú lateral al salir de esta página
    this.menuController.enable(true);
  }

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

  logout() {
    // Redirige a la página de inicio
    this.navCtrl.navigateRoot('/inicio');
  }
}
