// producto.ts
export interface Producto {
  id_producto: number;
  Nombre: string;
  Descripcion: string;
  Precio: number;
  Imagen: any;  // any para que pueda trabajarse como blob la tabla y los metodos en db.service.ts 
}
