// producto.ts
export interface Producto {
  id_producto: number;
  Nombre: string;
  Descripcion: string;
  Precio: number;
  Imagen: string; // Cambiado de Blob a string
}
