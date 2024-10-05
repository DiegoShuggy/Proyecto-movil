// Ruta: src/app/modelos/tipo_producto.ts

export class TipoProducto {
  id_tipo_producto: number;
  Nombre: string;

  constructor(id_tipo_producto: number, Nombre: string) {
    this.id_tipo_producto = id_tipo_producto;
    this.Nombre = Nombre;
  }
}
