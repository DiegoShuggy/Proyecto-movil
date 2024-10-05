// Ruta: src/app/modelos/estado_envio.ts

export class EstadoEnvio {
    id_estado: number;
    desc_estado: string;
  
    constructor(id_estado: number, desc_estado: string) {
      this.id_estado = id_estado;
      this.desc_estado = desc_estado;
    }
  }
  