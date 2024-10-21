// src/app/models/producto.ts
export interface Producto {
  id_producto: number;
  Nombre: string;
  Precio: number;
  Descripcion: string;
  Imagen: any; // O string, dependiendo de cómo manejes la imagen
  id_categoria: number; // Nuevo campo para la categoría
}
