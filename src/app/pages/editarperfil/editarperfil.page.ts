// src/app/pages/editarperfil/editarperfil.page.ts
import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {
  usuario: Usuario = {
    Nombre: '',
    Correo: '',
    Password: '',
    Direccion: '',
    id_tipo_usuario: 1, // Asignar un valor predeterminado o manejarlo adecuadamente
    dirreciones_envio: '',
    avatar: new Blob(), // Inicializa con un Blob vacío
  };
  avatarURL: string | ArrayBuffer | null = null;

  constructor(
    private usuarioService: UsuarioService,
    private navCtrl: NavController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.usuarioService.usuario$.subscribe(usuario => {
      if (usuario) {
        this.usuario = { ...usuario }; // Crear una copia para evitar modificaciones directas
        this.setAvatarURL(usuario.avatar);
      }
    });
  }

  setAvatarURL(avatar: Blob | undefined) {
    if (avatar) {
      this.avatarURL = URL.createObjectURL(avatar);
    } else {
      this.avatarURL = null;
    }
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
        if (this.usuario) {
          this.usuario.avatar = blob;
          this.setAvatarURL(blob);
        }
      } else {
        console.error('No se pudo obtener la URL de la imagen');
      }
    } catch (error) {
      console.error('Error al tomar la foto:', error);
      const toast = await this.toastController.create({
        message: 'Error al tomar la foto.',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  }

  async saveChanges() {
    if (this.usuario) {
      // Validar que los campos requeridos estén llenos
      if (this.usuario.Nombre && this.usuario.Password && this.usuario.Correo && this.usuario.Direccion) {
        try {
          await this.usuarioService.updateUsuario(this.usuario);
          const toast = await this.toastController.create({
            message: 'Perfil actualizado correctamente.',
            duration: 2000,
            color: 'success'
          });
          toast.present();
          this.navCtrl.back();
        } catch (error) {
          console.error('Error al guardar los cambios:', error);
          const toast = await this.toastController.create({
            message: 'Error al actualizar el perfil.',
            duration: 2000,
            color: 'danger'
          });
          toast.present();
        }
      } else {
        const toast = await this.toastController.create({
          message: 'Por favor, completa todos los campos requeridos.',
          duration: 2000,
          color: 'warning'
        });
        toast.present();
      }
    }
  }
}
