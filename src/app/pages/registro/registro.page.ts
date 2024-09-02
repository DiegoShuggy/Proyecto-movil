import { Component } from '@angular/core';
import { AlertController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  name: string = '';  // Agregado para el campo de nombre
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  submitted: boolean = false;

  constructor(
    private alertController: AlertController,
    private navCtrl: NavController,
    private menuCtrl: MenuController
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
    this.submitted = true;

    // Validar que los campos no estén vacíos y las contraseñas coincidan
    if (this.name && this.email && this.password && this.confirmPassword && this.password === this.confirmPassword) {
      this.presentAlert();  // Mostrar alerta después de un registro exitoso
    } else {
      console.log('Faltan campos por llenar o las contraseñas no coinciden');
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Registro exitoso',
      message: 'Tu cuenta ha sido creada con éxito.',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.navCtrl.navigateRoot('/home');  // Redirigir a la página de Home
          }
        }
      ]
    });

    await alert.present();
  }
}
