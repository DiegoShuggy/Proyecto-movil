import { Component } from '@angular/core';
import { AlertController, NavController, MenuController } from '@ionic/angular';
import { DbService } from '../../servicios/db.service';  // Importa el servicio de la base de datos

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
    private menuCtrl: MenuController,  // Inyección de MenuController
    private dbService: DbService  // Inyección del servicio de base de datos
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
    this.errorMessage = '';

    // Validar las credenciales usando el servicio de base de datos
    this.dbService.login(this.email, this.password).then((usuario) => {
      if (usuario) {
        this.presentAlert('Inicio de sesión exitoso', 'Has iniciado sesión correctamente.', '/home');
      } else {
        this.errorMessage = 'Correo o contraseña incorrectos';
      }
    }).catch((err) => {
      console.error('Error al iniciar sesión', err);
      this.errorMessage = 'Error al iniciar sesión. Por favor, inténtalo de nuevo.';
    });
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

  // Método para navegar a la página de recuperación de contraseña
  navigateToRecover() {
    this.navCtrl.navigateForward('/recuperarc');
  }
}
