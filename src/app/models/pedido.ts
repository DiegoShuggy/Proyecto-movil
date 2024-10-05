// Ruta: src/app/modelos/pedido.ts

export class Pedido {
  id_pedido: number;
  Usuario: string;
  fecha: Date;
  total: number;
  id_usuario: number;
  id_tipo_producto: number;
  id_detalle_producto: number;

  constructor(
    id_pedido: number,
    Usuario: string,
    fecha: Date,
    total: number,
    id_usuario: number,
    id_tipo_producto: number,
    id_detalle_producto: number
  ) {
    this.id_pedido = id_pedido;
    this.Usuario = Usuario;
    this.fecha = fecha;
    this.total = total;
    this.id_usuario = id_usuario;
    this.id_tipo_producto = id_tipo_producto;
    this.id_detalle_producto = id_detalle_producto;
  }
}
