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
import { Categoria } from '../models/categoria';

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

 

 




  // persistencia de datos con el login para el registro 
  async login(email: string, password: string): Promise<Usuario | null> {
    try {
      const res = await this.db.executeSql('SELECT * FROM Usuario WHERE Correo = ? AND Password = ?', [email, password]);
      if (res.rows.length > 0) {
        return res.rows.item(0);
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      return null;
    }
  }
  
  // Método para agregar un producto al carrito
  async addToCart(id_producto: number, cantidad: number) {
    try {
      await this.db.executeSql('INSERT INTO Carrito (id_producto, cantidad) VALUES (?, ?)', [id_producto, cantidad]);
      console.log('Producto añadido al carrito');
    } catch (e) {
      console.error('Error añadiendo producto al carrito', e);
    }
  }

  // Método para obtener los productos del carrito
  async getCartItems(): Promise<any[]> {
    if (!this.db) {
      console.error('Database is not initialized');
      return [];
    }
    try {
      const res = await this.db.executeSql('SELECT * FROM Carrito', []);
      let items: any[] = [];
      for (let i = 0; i < res.rows.length; i++) {
        items.push(res.rows.item(i));
      }
      return items;
    } catch (e) {
      console.error('Error obteniendo productos del carrito', e);
      return [];
    }
  }

  // Método para eliminar un producto del carrito
  async deleteFromCart(id_producto: number) {
    try {
      await this.db.executeSql('DELETE FROM Carrito WHERE id_producto = ?', [id_producto]);
      console.log('Producto eliminado del carrito');
    } catch (e) {
      console.error('Error eliminando producto del carrito', e);
    }
  }


  //categorias para productos

  async addCategoria(categoria: Categoria) {
    const data = [categoria.nombre, categoria.imagen];
    await this.db.executeSql('INSERT INTO Categoria (nombre, imagen) VALUES (?, ?)', data)
      .then(() => console.log('Categoría añadida'))
      .catch(e => console.error('Error añadiendo categoría', e));
  }

  async getCategorias(): Promise<Categoria[]> {
    const res = await this.db.executeSql('SELECT * FROM Categoria', []);
    let categorias: Categoria[] = [];
    for (let i = 0; i < res.rows.length; i++) {
      categorias.push(res.rows.item(i));
    }
    return categorias;
  }

  async updateCategoria(categoria: Categoria) {
    const data = [categoria.nombre, categoria.imagen, categoria.id_categoria];
    await this.db.executeSql('UPDATE Categoria SET nombre = ?, imagen = ? WHERE id_categoria = ?', data)
      .then(() => console.log('Categoría actualizada'))
      .catch(e => console.error('Error actualizando categoría', e));
  }

  async deleteCategoria(id_categoria: number) {
    await this.db.executeSql('DELETE FROM Categoria WHERE id_categoria = ?', [id_categoria])
      .then(() => console.log('Categoría eliminada'))
      .catch(e => console.error('Error eliminando categoría', e));
  }
  
  // todo lo que tienee que ver con gestion de productos

  async addProducto(producto: Producto) {
    const data = [producto.Nombre, producto.Descripcion, producto.Precio, producto.Imagen];
    await this.db.executeSql('INSERT INTO Producto (nombre, descripcion, precio, imagen) VALUES (?, ?, ?, ?)', data)
      .then(() => console.log('Producto añadido'))
      .catch(e => console.error('Error añadiendo producto', e));
  }

  async getProductos(): Promise<Producto[]> {
    const res = await this.db.executeSql('SELECT * FROM Producto', []);
    let productos: Producto[] = [];
    for (let i = 0; i < res.rows.length; i++) {
      productos.push(res.rows.item(i));
    }
    return productos;
  }

  async updateProducto(producto: Producto) {
    const data = [producto.Nombre, producto.Descripcion, producto.Precio, producto.Imagen, producto.id_producto];
    await this.db.executeSql('UPDATE Producto SET nombre = ?, descripcion = ?, precio = ?, imagen = ? WHERE id_producto = ?', data)
      .then(() => console.log('Producto actualizado'))
      .catch(e => console.error('Error actualizando producto', e));
  }

  async deleteProducto(id_producto: number) {
    await this.db.executeSql('DELETE FROM Producto WHERE id_producto = ?', [id_producto])
      .then(() => console.log('Producto eliminado'))
      .catch(e => console.error('Error eliminando producto', e));
  }
  
  // para mostrar productos en pagina de productos

  // Método para obtener un producto por su id
  async getProductoById(id: number): Promise<Producto | null> {
    try {
      const res = await this.db.executeSql('SELECT * FROM Producto WHERE id_producto = ?', [id]);
      if (res.rows.length > 0) {
        return res.rows.item(0);
      } else {
        return null;
      }
    } catch (e) {
      console.error('Error obteniendo producto por id', e);
      return null;
    }
  }
  
  // Método para agregar un usuario
  async addUsuario(usuario: Usuario) {
    if (!this.db) {
      console.error('Database is not initialized');
      return;
    }
    try {
      const data = [usuario.Nombre, usuario.Password, usuario.Correo, usuario.Direccion, usuario.id_tipo_usuario, usuario.dirreciones_envio, usuario.avatar];
      await this.db.executeSql('INSERT INTO Usuario (Nombre, Password, Correo, Direccion, id_tipo_usuario, dirreciones_envio, avatar) VALUES (?, ?, ?, ?, ?, ?, ?)', data);
      console.log('Usuario añadido');
    } catch (e) {
      console.error('Error adding usuario', e);
    }
  }

  

 

  
  
  


  // Inicializa la base de datos y crea las tablas necesarias


  
  private async createTables() {

    // categorias
    await this.db.executeSql(
      `CREATE TABLE IF NOT EXISTS Categoria (
        id_categoria INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre VARCHAR(255),
        imagen VARCHAR(255)
      );`,
      []
    ).then(() => console.log('Tabla Categoria creada'))
     .catch(e => console.error('Error creando tabla Categoria', e));
      // carrito
      await this.db.executeSql(
        `
          CREATE TABLE IF NOT EXISTS Carrito (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_producto INTEGER,
            cantidad INTEGER
          );
        `,
        []
      ).then(() => console.log('Tabla Carrito creada'))
        .catch(e => console.error('Error creando tabla Carrito', e));
    
        //usuario 
        await this.db.executeSql(
          `
          CREATE TABLE IF NOT EXISTS Usuario (
            id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
            Nombre VARCHAR(255),
            Password VARCHAR(255),
            Correo VARCHAR(255),
            Direccion VARCHAR(255),
            id_tipo_usuario INTEGER,
            dirreciones_envio VARCHAR(255),
            avatar BLOB
          );
          `,
          []
        ).then(() => console.log('Tabla Usuario creada'))
        .catch(e => console.error('Error creando tabla Usuario', e));
    // producto
    await this.db.executeSql(
      `CREATE TABLE IF NOT EXISTS Producto (
        id_producto INTEGER PRIMARY KEY AUTOINCREMENT,
        Nombre VARCHAR(255),
        Descripcion VARCHAR(255),
        Precio REAL,
        Imagen VARCHAR(255),
        id_tipo_producto INTEGER
      );`,
      []
    ).then(() => console.log('Tabla Producto creada'))
     .catch(e => console.error('Error creando tabla Producto', e));


        //pedido

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
      //tipo usuario
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
        //tipo producto
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
        //detalle pedido
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

      //envio

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

      //estado envio

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

// Método para actualizar un usuario


async getUsuarios(): Promise<Usuario[]> {
  const res = await this.db.executeSql('SELECT * FROM Usuario', []);
  let usuarios: Usuario[] = [];
  for (let i = 0; i < res.rows.length; i++) {
    usuarios.push(res.rows.item(i));
  }
  return usuarios;
}

async updateUsuario(usuario: Usuario) {
  if (!this.db) {
    console.error('Database is not initialized');
    return;
  }
  try {
    const data = [
      usuario.Nombre, 
      usuario.Password, 
      usuario.Correo, 
      usuario.Direccion, 
      usuario.id_tipo_usuario, 
      usuario.dirreciones_envio, 
      usuario.avatar, 
      usuario.id_usuario
    ];
    await this.db.executeSql(`
      UPDATE Usuario 
      SET Nombre = ?, Password = ?, Correo = ?, Direccion = ?, id_tipo_usuario = ?, dirreciones_envio = ?, avatar = ? 
      WHERE id_usuario = ?
    `, data);
    console.log('Usuario actualizado');
  } catch (error) {
    console.error('Error updating usuario:', error);
  }
}
}