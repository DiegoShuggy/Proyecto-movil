// src/app/models/categoria.ts
export class Categoria {
  id_categoria?: number; // Mantiene como opcional ya que se autoincrementa
  nombre: string;
  imagen: string;

  constructor(nombre: string, imagen: string) {
    this.nombre = nombre;
    this.imagen = imagen;
  }
}
