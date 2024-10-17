// src/app/pages/recuperarc/recuperarc.page.ts
import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperarc',
  templateUrl: './recuperarc.page.html',
  styleUrls: ['./recuperarc.page.scss'],
})
export class RecuperarcPage {
  email: string = '';

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController
  ) {}

  // Método para recuperar la contraseña
  async recoverPassword() {
    if (this.email) {
      // Implementa la lógica de recuperación de contraseña aquí
      // Por ejemplo, enviar un correo de recuperación a través de un servicio backend
      // Aquí simplemente simularemos el proceso

      // Simulación de éxito
      const toast = await this.toastController.create({
        message: 'Se ha enviado un correo de recuperación.',
        duration: 2000,
        color: 'success'
      });
      toast.present();
      this.navCtrl.navigateBack('/pages/login');
    } else {
      const toast = await this.toastController.create({
        message: 'Por favor, introduce tu correo electrónico.',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
    }
  }
}
