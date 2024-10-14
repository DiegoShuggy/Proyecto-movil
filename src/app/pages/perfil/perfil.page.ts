import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

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

  // Variable para almacenar la imagen capturada
  image: string | undefined;

  constructor() {}

  // Método para tomar una foto usando la cámara
  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera, // Puedes usar CameraSource.Photos para acceder a la galería
    });

    this.image = image.webPath; // Almacenar la ruta de la imagen capturada
  }
}
