// Ruta: src/app/pages/editarperfil/editarperfil.page.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import { NavController, ToastController } from '@ionic/angular';
import { DbService } from '../../servicios/db.service';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit, OnDestroy {
  usuario: Usuario = {
    Nombre: '',
    Correo: '',
    Password: '',
    Direccion: '',
    id_tipo_usuario: 1,
    dirreciones_envio: '',
    avatar: null // La variable para la imagen se define como Blob
  };
  avatarURL: string | null = null; // La URL de la imagen también se define como string o null

  constructor(
    private usuarioService: UsuarioService,
    private navCtrl: NavController,
    private toastController: ToastController,
    private db: DbService // Añadir el servicio de base de datos
  ) {}

  ngOnInit() {
    this.loadUsuario();
  }

 // Cargar usuario desde el servicio y configurar avatar
 loadUsuario() {
  this.usuarioService.usuario$.subscribe(usuario => {
    if (usuario) {
      this.usuario = { ...usuario };
      this.setAvatarURL(usuario.avatar); // Cargar la imagen al obtener el usuario
    }
  });
}

   // Configurar URL para mostrar avatar
   setAvatarURL(avatar: any) {
    if (avatar) {
      this.avatarURL = avatar; // Usar el avatar como Data URL directamente
    } else {
      this.avatarURL = null;
    }
  }


   // Tomar una foto y asignarla como avatar
   async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl, // Obtenemos la imagen como Data URL
        source: CameraSource.Prompt, // Permitir elegir entre cámara y galería
      });

      if (image.dataUrl) {
        this.usuario.avatar = image.dataUrl; // Guardar el Data URL en la propiedad avatar
        this.setAvatarURL(image.dataUrl); // Actualizar la vista del avatar
      } else {
        console.error('No se pudo obtener la imagen de la cámara/galería.');
      }
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }
  // Guardar cambios del perfil, incluyendo el avatar
  async saveChanges() {
    if (this.usuario) {
      if (this.usuario.Nombre && this.usuario.Password && this.usuario.Correo && this.usuario.Direccion) {
        try {
          await this.usuarioService.updateUsuario(this.usuario);

          // Verificar si id_usuario está definido antes de usarlo
          if (this.usuario.avatar && this.usuario.id_usuario !== undefined) {
            await this.db.modImagenPerfil(this.usuario.id_usuario!, this.usuario.avatar); // Asegúrate de usar el operador "!" aquí
          }

          const toast = await this.toastController.create({
            message: 'Perfil actualizado correctamente.',
            duration: 2000,
            color: 'success'
          });
          toast.present();
          this.navCtrl.navigateRoot('/home');
        } catch (error) {
          console.error('Error al guardar el perfil:', error);
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

  // Limpia la URL del avatar cuando el componente se destruye
  ngOnDestroy() {
    if (this.avatarURL) {
      URL.revokeObjectURL(this.avatarURL); // Limpia la URL al destruir el componente
    }
  }

  async cambiarImagen() {
    try {
      const imagen = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Prompt,
      });

      if (imagen) {
        this.usuario.avatar = `data:image/${imagen.format};base64,${imagen.base64String}`;
        await this.modPerfil(); // Llamar a la función para actualizar la imagen en la base de datos
      }
    } catch (error) {
      console.error('Error al obtener la imagen:', error);
    }
  }

  // Guardar la imagen en la base de datos
  async modPerfil() {
    if (this.usuario && this.usuario.id_usuario) {
      await this.db.modImagenPerfil(this.usuario.id_usuario, this.usuario.avatar);
    }
  }
}
