import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {

  // Valores iniciales por defecto
  nombre: string = 'Pepe';
  correo: string = 'pepe@gmail.com';
  contrasena: string = '1234';
  direccion: string = 'Avenida Falsa 23, 2051';

  constructor(private alertController: AlertController) {}

  async editField(field: string) {
    const alert = await this.alertController.create({
      header: 'Edición exitosa',
      message: `${field} editado correctamente.`,
      buttons: ['OK']
    });

    await alert.present();
  }
}
