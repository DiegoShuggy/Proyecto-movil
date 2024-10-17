// src/app/models/categoria.ts
export class Categoria {
  id_categoria?: number;
  nombre: string;
  imagen: string;

  constructor(nombre: string, imagen: string) {
    this.nombre = nombre;
    this.imagen = imagen;
  }
}
