// Ruta: src/app/modelos/usuario.ts

export class Usuario {
  id_usuario: number;
  Nombre: string;
  Password: string;
  Correo: string;
  Direccion: string;
  id_tipo_usuario: number;

  constructor(
    id_usuario: number,
    Nombre: string,
    Password: string,
    Correo: string,
    Direccion: string,
    id_tipo_usuario: number
  ) {
    this.id_usuario = id_usuario;
    this.Nombre = Nombre;
    this.Password = Password;
    this.Correo = Correo;
    this.Direccion = Direccion;
    this.id_tipo_usuario = id_tipo_usuario;
  }
}
