import { Component } from '@angular/core';
import { AlertController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-recuperarc',
  templateUrl: './recuperarc.page.html',
  styleUrls: ['./recuperarc.page.scss'],
})
export class RecuperarcPage {
  email: string = '';
  errorMessage: string = '';

  constructor(
    private alertController: AlertController,
    private navCtrl: NavController,
    private menuCtrl: MenuController // Inyecta MenuController
  ) {}

  ionViewWillEnter() {
    this.menuCtrl.enable(false); // Desactiva el menú lateral
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true); // Activa el menú lateral nuevamente
  }

  onRecover() {
    if (this.email === 'pepe@gmail.com') {
      this.presentAlert('Recuperación de Contraseña', 'Se ha enviado un mensaje al correo', '/inicio');
    } else {
      this.errorMessage = 'Correo no registrado';
    }
  }

  async presentAlert(header: string, message: string, redirectUrl: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.navCtrl.navigateRoot(redirectUrl);  // Redirigir a la página de inicio
          }
        }
      ]
    });

    await alert.present();
  }
}
