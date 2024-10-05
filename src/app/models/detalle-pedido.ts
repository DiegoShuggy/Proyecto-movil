// Ruta: src/app/modelos/detalle_pedido.ts

export class DetallePedido {
    id_pedido: number;
    id_producto: number;
    cantidad: number;
    id_detalle_pedido: number;
  
    constructor(
      id_pedido: number,
      id_producto: number,
      cantidad: number,
      id_detalle_pedido: number
    ) {
      this.id_pedido = id_pedido;
      this.id_producto = id_producto;
      this.cantidad = cantidad;
      this.id_detalle_pedido = id_detalle_pedido;
    }
  }
  