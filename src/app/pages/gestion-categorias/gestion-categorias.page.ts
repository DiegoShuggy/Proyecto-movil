import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-gestion-categorias',
  templateUrl: './gestion-categorias.page.html',
  styleUrls: ['./gestion-categorias.page.scss'],
})
export class GestionCategoriasPage implements OnInit {
  categories = [
    { name: 'Accesorios', image: 'assets/imgs/accesorios.jpg' },
    { name: 'Loza/Vajilla/Cerámica', image: 'assets/imgs/loza.jpg' },
    { name: 'Manteles Mesa/Individuales', image: 'assets/imgs/manteles.jpg' }
    // Puedes agregar más categorías aquí
  ];

  constructor(
    private alertController: AlertController,
    private navCtrl: NavController,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {}

  async editCategory(category: any) {
    const alert = await this.alertController.create({
      header: 'Categoría Editada',
      message: `La categoría "${category.name}" ha sido editada.`,
      buttons: ['OK']
    });

    await alert.present();
  }

  async deleteCategory(category: any) {
    const alert = await this.alertController.create({
      header: 'Categoría Eliminada',
      message: `La categoría "${category.name}" ha sido eliminada.`,
      buttons: ['OK']
    });

    await alert.present();
  }

  // Método para cerrar sesión
  logout() {
    this.navCtrl.navigateRoot('/inicio');
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);  // Desactiva el menú lateral
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);  // Activa el menú lateral nuevamente
  }
}
