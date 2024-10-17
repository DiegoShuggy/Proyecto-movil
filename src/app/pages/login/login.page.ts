// src/app/pages/login/login.page.ts
import { Component } from '@angular/core';
import { NavController, AlertController, MenuController, ToastController } from '@ionic/angular';
import { UsuarioService } from '../../servicios/usuario.service';

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
    private navCtrl: NavController,
    private alertController: AlertController,
    private menuCtrl: MenuController,
    private usuarioService: UsuarioService,
    private toastController: ToastController
  ) {}

  // Deshabilitar el menú cuando se entra a la página
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  // Rehabilitar el menú cuando se sale de la página
  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }

  // Método que se ejecuta al enviar el formulario
  async onSubmit() {
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor, completa todos los campos.';
      return;
    }

    const success = await this.usuarioService.login(this.email, this.password);
    if (success) {
      const toast = await this.toastController.create({
        message: 'Inicio de sesión exitoso.',
        duration: 2000,
        color: 'success'
      });
      toast.present();
      this.navCtrl.navigateRoot('/home');
    } else {
      this.errorMessage = 'Correo o contraseña incorrectos.';
      const toast = await this.toastController.create({
        message: 'Correo o contraseña incorrectos.',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  }

  // Método para navegar a la página de recuperación de contraseña
  navigateToRecover() {
    this.navCtrl.navigateForward('/recuperarc');
  }

  // Método para navegar a la página de registro
  navigateToRegister() {
    this.navCtrl.navigateForward('/registro');
  }
}
