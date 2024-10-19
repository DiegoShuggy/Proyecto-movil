// src/app/pages/perfil/perfil.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import { DbService } from '../../servicios/db.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  id_usuario: number | null = null;
  usuarioLogueado: Usuario | null = null; // Mismo patrón que en home.page.ts
  usuario: Usuario = {} as Usuario; // Inicializamos el usuario como un objeto vacío
  avatarURL: string | null = null; // Para almacenar la URL del avatar
  imagenDefault = 'src/assets/icon/imagen_perfil_default.png'; // Ruta de la imagen por defecto

  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private usuarioService: UsuarioService,
    private db: DbService
  ) {}

  ngOnInit() {
    this.loadUsuario(); // Cargar usuario al iniciar
  }

  // Cargar usuario desde la base de datos
  async loadUsuario() {
    const id_usuario = await this.db.getUsuario(); // Obtener ID de usuario
    console.log('ID de usuario:', id_usuario);

    if (id_usuario !== null) {
      const usuario = await this.usuarioService.getCurrentUser(); // Obtener usuario
      if (usuario) {
        this.usuarioLogueado = usuario; // Asignar a usuarioLogueado
        console.log('Usuario cargado:', usuario); // Debugging
        this.setAvatarURL(this.usuarioLogueado.avatar); // Configurar la URL del avatar
      } else {
        console.error('Usuario no encontrado');
      }
    } else {
      console.error('ID de usuario no disponible');
    }
  }

  setAvatarURL(avatar: any) {
    if (avatar) {
      if (typeof avatar === 'string') {
        this.avatarURL = avatar;
      } else if (avatar instanceof Blob) {
        this.avatarURL = URL.createObjectURL(avatar);
      } else {
        this.avatarURL = this.imagenDefault;
      }
    } else {
      this.avatarURL = this.imagenDefault;
    }
  }


  // Cambiar imagen de perfil
  async cambiarImagen() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt,
      });

      if (image.dataUrl) {
        // Convertir la imagen a Blob para almacenarla
        const response = await fetch(image.dataUrl);
        const blob = await response.blob();
        const reader = new FileReader();

        // Leer el blob como Base64
        reader.onloadend = () => {
          const base64data = reader.result;
          this.usuario.avatar = base64data; // Actualizar el avatar en el usuario
          this.setAvatarURL(base64data); // Actualizar la vista del avatar
          this.modPerfil(); // Actualizar en la base de datos
        };

        reader.readAsDataURL(blob); // Leer el blob
      } else {
        console.error('No se pudo obtener la imagen de la cámara/galería.');
      }
    } catch (error) {
      console.error('Error al tomar la foto:', error);
      await this.presentAlert('Error', 'No se pudo seleccionar la imagen.');
    }
  }

  // Modificar perfil en la base de datos
  async modPerfil() {
    if (this.usuario && this.usuario.id_usuario) {
      try {
        await this.usuarioService.updateUsuario(this.usuario);
        console.log('Perfil actualizado:', this.usuario);
      } catch (error) {
        console.error('Error al actualizar el perfil:', error);
      }
    }
  }

  // Método para cerrar sesión
  cerrarSesion() {
    this.presentAlert('Cerrar sesión', '¿Está seguro de que desea cerrar sesión?');
  }

  // Presentar alerta para cerrar sesión
  async presentAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['/inicio']);
            console.log('Sesión cerrada');
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
        },
      ],
    });
    await alert.present();
  }
}
