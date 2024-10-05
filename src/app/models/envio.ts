// Ruta: src/app/modelos/envio.ts

export class Envio {
    id_envio: number;
    id_pedido: number;
    direccion: string;
    id_estado_envio: number;
    fecha_envio: Date;
  
    constructor(
      id_envio: number,
      id_pedido: number,
      direccion: string,
      id_estado_envio: number,
      fecha_envio: Date
    ) {
      this.id_envio = id_envio;
      this.id_pedido = id_pedido;
      this.direccion = direccion;
      this.id_estado_envio = id_estado_envio;
      this.fecha_envio = fecha_envio;
    }
  }
  