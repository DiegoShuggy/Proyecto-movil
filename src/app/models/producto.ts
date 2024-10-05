// Ruta: src/app/modelos/producto.ts

export class Producto {
  id_producto: number;
  Nombre: string;
  Descripcion: string;
  Precio: number;
  Imagen: string;
  id_tipo_producto: number;

  constructor(
    id_producto: number,
    Nombre: string,
    Descripcion: string,
    Precio: number,
    Imagen: string,
    id_tipo_producto: number
  ) {
    this.id_producto = id_producto;
    this.Nombre = Nombre;
    this.Descripcion = Descripcion;
    this.Precio = Precio;
    this.Imagen = Imagen;
    this.id_tipo_producto = id_tipo_producto;
  }
}
