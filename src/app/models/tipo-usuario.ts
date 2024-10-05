// Ruta: src/app/modelos/tipo_usuario.ts

export class TipoUsuario {
  id_tipo_usuario: number;
  desc: string;

  constructor(id_tipo_usuario: number, desc: string) {
    this.id_tipo_usuario = id_tipo_usuario;
    this.desc = desc;
  }
}
