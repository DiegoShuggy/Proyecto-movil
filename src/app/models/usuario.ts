// src/app/models/usuario.ts
export class Usuario {
  id_usuario?: number;
  Nombre: string;
  Password: string;
  Correo: string;
  Direccion: string;
  id_tipo_usuario: number;
  dirreciones_envio: string;
  avatar: Blob; // Almacena la imagen del avatar como Blob

  constructor(
    Nombre: string,
    Password: string,
    Correo: string,
    Direccion: string,
    id_tipo_usuario: number,
    dirreciones_envio: string,
    avatar: Blob
  ) {
    this.Nombre = Nombre;
    this.Password = Password;
    this.Correo = Correo;
    this.Direccion = Direccion;
    this.id_tipo_usuario = id_tipo_usuario;
    this.dirreciones_envio = dirreciones_envio;
    this.avatar = avatar;
  }
}
