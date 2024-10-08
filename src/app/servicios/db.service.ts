// Ruta: src/app/servicios/db.service.ts

import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../models/usuario';
import { Producto } from '../models/producto';
import { Pedido } from '../models/pedido';
import { TipoUsuario } from '../models/tipo-usuario';
import { TipoProducto } from '../models/tipo-producto';
import { DetallePedido } from '../models/detalle-pedido';
import { Envio } from '../models/envio';
import { EstadoEnvio } from '../models/estado-envio';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  db!: SQLiteObject;
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite) {
    this.initializeDatabase();
  }

  // Verifica si la base de datos está lista
  dbState() {
    return this.isDbReady.asObservable();
  }


  

  // Inicializa la base de datos y crea las tablas necesarias
  private async initializeDatabase() {
    try {
      const db = await this.sqlite.create({
        name: 'data.db',
        location: 'default'
      });
      this.db = db;
      await this.createTables();
      this.isDbReady.next(true);
    } catch (e) {
      console.error('Error initializing database', e);
    }
  }
  async login(email: string, password: string): Promise<Usuario | null> {
    try {
      const res = await this.db.executeSql('SELECT * FROM Usuario WHERE Correo = ? AND Password = ?', [email, password]);
      if (res.rows.length > 0) {
        return res.rows.item(0);
      } else {
        return null;
      }
    } catch (e) {
      console.error('Error al iniciar sesión', e);
      return null;
    }
  }
  

  // Ruta: src/app/servicios/db.service.ts

getUsuarios(): Promise<Usuario[]> {
  return this.db.executeSql('SELECT * FROM Usuario', []).then((res) => {
    let usuarios: Usuario[] = [];
    for (let i = 0; i < res.rows.length; i++) {
      usuarios.push(res.rows.item(i));
    }
    return usuarios;
  });
}


  // Inicializa la base de datos y crea las tablas necesarias
  private async createTables() {
    await this.db.executeSql(
      `
        CREATE TABLE IF NOT EXISTS Usuario (
          id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
          Nombre VARCHAR(255),
          Password VARCHAR(255),
          Correo VARCHAR(255),
          Direccion VARCHAR(255),
          id_tipo_usuario INTEGER
        );
      `,
      []
    ).then(() => console.log('Tabla Usuario creada'))
    .catch(e => console.error('Error creando tabla Usuario', e));

    await this.db
      .executeSql(
        `
          CREATE TABLE IF NOT EXISTS Producto (
            id_producto INTEGER PRIMARY KEY AUTOINCREMENT,
            Nombre VARCHAR(255),
            Descripcion VARCHAR(255),
            Precio REAL,
            Imagen VARCHAR(255),
            id_tipo_producto INTEGER
          );
        `,
        []
      )
      .then(() => console.log('Tabla Producto creada'))
      .catch((e) => console.error('Error creando tabla Producto', e));

    await this.db
      .executeSql(
        `
          CREATE TABLE IF NOT EXISTS Pedido (
            id_pedido INTEGER PRIMARY KEY AUTOINCREMENT,
            Usuario VARCHAR(255),
            fecha DATE,
            total REAL,
            id_usuario INTEGER,
            id_tipo_producto INTEGER,
            id_detalle_producto INTEGER
          );
        `,
        []
      )
      .then(() => console.log('Tabla Pedido creada'))
      .catch((e) => console.error('Error creando tabla Pedido', e));

    await this.db
      .executeSql(
        `
          CREATE TABLE IF NOT EXISTS TipoUsuario (
            id_tipo_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
            desc VARCHAR(255)
          );
        `,
        []
      )
      .then(() => console.log('Tabla TipoUsuario creada'))
      .catch((e) => console.error('Error creando tabla TipoUsuario', e));

    await this.db
      .executeSql(
        `
          CREATE TABLE IF NOT EXISTS TipoProducto (
            id_tipo_producto INTEGER PRIMARY KEY AUTOINCREMENT,
            Nombre VARCHAR(255)
          );
        `,
        []
      )
      .then(() => console.log('Tabla TipoProducto creada'))
      .catch((e) => console.error('Error creando tabla TipoProducto', e));

    await this.db
      .executeSql(
        `
          CREATE TABLE IF NOT EXISTS DetallePedido (
            id_pedido INTEGER,
            id_producto INTEGER,
            cantidad INTEGER,
            id_detalle_pedido INTEGER PRIMARY KEY AUTOINCREMENT
          );
        `,
        []
      )
      .then(() => console.log('Tabla DetallePedido creada'))
      .catch((e) => console.error('Error creando tabla DetallePedido', e));

    await this.db
      .executeSql(
        `
          CREATE TABLE IF NOT EXISTS Envio (
            id_envio INTEGER PRIMARY KEY AUTOINCREMENT,
            id_pedido INTEGER,
            direccion VARCHAR(255),
            id_estado_envio INTEGER,
            fecha_envio DATE
          );
        `,
        []
      )
      .then(() => console.log('Tabla Envio creada'))
      .catch((e) => console.error('Error creando tabla Envio', e));

    await this.db
      .executeSql(
        `
          CREATE TABLE IF NOT EXISTS EstadoEnvio (
            id_estado INTEGER PRIMARY KEY AUTOINCREMENT,
            desc_estado VARCHAR(255)
          );
        `,
        []
      )
      .then(() => console.log('Tabla EstadoEnvio creada'))
      .catch((e) => console.error('Error creando tabla EstadoEnvio', e));

    this.isDbReady.next(true);
  }

  // Métodos CRUD para cada tabla
  // ===============================

  // Métodos para 'Usuario'
  async addUsuario(usuario: Usuario) {
    if (!this.db) {
      console.error('Database is not initialized');
      return;
    }
    try {
      await this.db.executeSql('INSERT INTO Usuario (Nombre, Password, Correo, Direccion, id_tipo_usuario) VALUES (?, ?, ?, ?, ?)', 
      [usuario.Nombre, usuario.Password, usuario.Correo, usuario.Direccion, usuario.id_tipo_usuario]);
      console.log('Usuario añadido');
    } catch (e) {
      console.error('Error adding usuario', e);
    }
  }
  

  // Métodos para 'Producto'
  addProducto(producto: Producto) {
    const query = `
      INSERT INTO Producto (Nombre, Descripcion, Precio, Imagen, id_tipo_producto)
      VALUES (?, ?, ?, ?, ?)
    `;
    return this.db.executeSql(query, [
      producto.Nombre,
      producto.Descripcion,
      producto.Precio,
      producto.Imagen,
      producto.id_tipo_producto,
    ]);
  }

  // Métodos para 'Pedido'
  addPedido(pedido: Pedido) {
    const query = `
      INSERT INTO Pedido (Usuario, fecha, total, id_usuario, id_tipo_producto, id_detalle_producto)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    return this.db.executeSql(query, [
      pedido.Usuario,
      pedido.fecha,
      pedido.total,
      pedido.id_usuario,
      pedido.id_tipo_producto,
      pedido.id_detalle_producto,
    ]);
  }

  // Métodos para 'TipoUsuario'
  addTipoUsuario(tipoUsuario: TipoUsuario) {
    const query = `
      INSERT INTO TipoUsuario (desc)
      VALUES (?)
    `;
    return this.db.executeSql(query, [tipoUsuario.desc]);
  }

  // Métodos para 'TipoProducto'
  addTipoProducto(tipoProducto: TipoProducto) {
    const query = `
      INSERT INTO TipoProducto (Nombre)
      VALUES (?)
    `;
    return this.db.executeSql(query, [tipoProducto.Nombre]);
  }

  // Métodos para 'DetallePedido'
  addDetallePedido(detallePedido: DetallePedido) {
    const query = `
      INSERT INTO DetallePedido (id_pedido, id_producto, cantidad)
      VALUES (?, ?, ?)
    `;
    return this.db.executeSql(query, [
      detallePedido.id_pedido,
      detallePedido.id_producto,
      detallePedido.cantidad,
    ]);
  }

  // Métodos para 'Envio'
  addEnvio(envio: Envio) {
    const query = `
      INSERT INTO Envio (id_pedido, direccion, id_estado_envio, fecha_envio)
      VALUES (?, ?, ?, ?)
    `;
    return this.db.executeSql(query, [
      envio.id_pedido,
      envio.direccion,
      envio.id_estado_envio,
      envio.fecha_envio,
    ]);
  }

  // Métodos para 'EstadoEnvio'
  addEstadoEnvio(estadoEnvio: EstadoEnvio) {
    const query = `
      INSERT INTO EstadoEnvio (desc_estado)
      VALUES (?)
    `;
    return this.db.executeSql(query, [estadoEnvio.desc_estado]);
  }

}


