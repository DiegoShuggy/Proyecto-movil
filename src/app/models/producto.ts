export interface Producto {
  id_producto: number;
  Nombre: string;
  Precio: number;
  Descripcion: string;
  Imagen: Blob | string; // Puedes seguir usando Blob o string para imágenes Base64
  id_categoria: number; // Nuevo campo para la categoría
}
