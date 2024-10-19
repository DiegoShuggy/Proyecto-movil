// src/app/models/usuario.ts
export class Usuario {
  id_usuario?: number; // Opcional porque puede no estar presente al crear un nuevo usuario
  Nombre: string;
  Password: string;
  Correo: string;
  Direccion: string;
  id_tipo_usuario: number;
  dirreciones_envio: string;
  avatar: any;

  constructor(
    Nombre: string,
    Password: string,
    Correo: string,
    Direccion: string,
    id_tipo_usuario: number,
    dirreciones_envio: string,
    avatar: any,
    id_usuario?: number // Añadido como parámetro opcional
  ) {
    this.Nombre = Nombre;
    this.Password = Password;
    this.Correo = Correo;
    this.Direccion = Direccion;
    this.id_tipo_usuario = id_tipo_usuario;
    this.dirreciones_envio = dirreciones_envio;
    this.avatar = avatar;
    this.id_usuario = id_usuario; // Se asigna aquí
  }
}
