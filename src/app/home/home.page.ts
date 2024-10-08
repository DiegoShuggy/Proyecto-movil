// Ruta: src/app/home/home.page.ts

import { Component, OnInit } from '@angular/core';
import { DbService } from '../servicios/db.service';
import { Usuario } from '../models/usuario';  // Importar la clase Usuario

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  // Propiedades para almacenar datos de la base de datos
  usuarios: Usuario[] = [];  // Array para almacenar los usuarios obtenidos de la base de datos

  constructor(private dbService: DbService) {}

  // Inicializa la base de datos y carga los datos necesarios cuando se inicia la página
  ngOnInit() {
    // Escucha si la base de datos está lista para usar
    this.dbService.dbState().subscribe((ready) => {
      if (ready) {
        this.loadUsuarios();  // Cargar los usuarios existentes de la base de datos
      }
    });
  }

  // Crea un usuario de ejemplo
  addUsuario() {
    const nuevoUsuario: Usuario = {
      id_usuario: 1,  // ID autoincremental, SQLite lo manejará automáticamente
      Nombre: 'Juan Pérez',
      Password: 'password123',
      Correo: 'juan.perez@gmail.com',
      Direccion: 'Calle Falsa 123',
      id_tipo_usuario: 1  // Asumiendo que el tipo de usuario 1 es válido
    };

    this.dbService.addUsuario(nuevoUsuario).then(() => {
      console.log('Usuario añadido con éxito');
      this.loadUsuarios();  // Recargar la lista de usuarios para reflejar los cambios
    }).catch((err) => {
      console.error('Error al añadir el usuario', err);
    });
  }

  // Método para cargar todos los usuarios desde la base de datos
  loadUsuarios() {
    this.dbService.getUsuarios().then((data: Usuario[]) => {
      this.usuarios = data;  // Asigna los usuarios obtenidos de la base de datos al array 'usuarios'
    }).catch((err) => {
      console.error('Error al cargar los usuarios', err);
    });
  }
}
