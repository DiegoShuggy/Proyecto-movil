import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {
  usuario: Usuario = {} as Usuario;

  constructor(private usuarioService: UsuarioService, private alertController: AlertController) {}

  ngOnInit() {
    this.usuarioService.usuario$.subscribe(usuario => {
      if (usuario) {
        this.usuario = usuario;
      }
    });
  }

  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });

      if (image.dataUrl) {
        const response = await fetch(image.dataUrl);
        const blob = await response.blob();
        this.usuario.avatar = blob;
      } else {
        console.error('No se pudo obtener la URL de la imagen');
      }
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }

  async saveChanges() {
    try {
      await this.usuarioService.updateUsuario(this.usuario);
      this.presentAlert('Cambios guardados', 'Los cambios han sido guardados exitosamente.');
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  createObjectURL(blob: Blob): string {
    return URL.createObjectURL(blob);
  }
}
