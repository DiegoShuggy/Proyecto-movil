import { Component } from '@angular/core';
import { AlertController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private alertController: AlertController,
    private navCtrl: NavController,
    private menuCtrl: MenuController  // Inyección de MenuController
  ) {}

  // Deshabilitar el menú cuando se entra a la página
  ionViewWillEnter() {
    this.menuCtrl.enable(false);  // Desactiva el menú lateral
  }

  // Rehabilitar el menú cuando se sale de la página
  ionViewWillLeave() {
    this.menuCtrl.enable(true);  // Activa el menú lateral nuevamente
  }

  onSubmit() {
    // Validar las credenciales
    if (this.email === 'pepe@gmail.com' && this.password === '1234') {
      this.presentAlert('Inicio de sesión exitoso', 'Has iniciado sesión correctamente.', '/home');
    } else if (this.email === 'admin@gmail.com' && this.password === 'admin') {
      this.presentAlert('Inicio de sesión exitoso', 'Has iniciado sesión como administrador.', '/home-admin');
    } else {
      this.errorMessage = 'Correo o contraseña incorrectos';
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
            this.navCtrl.navigateRoot(redirectUrl);  // Redirigir según el rol
          }
        }
      ]
    });

    await alert.present();
  }
}
