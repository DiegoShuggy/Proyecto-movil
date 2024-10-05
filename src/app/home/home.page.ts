// Ruta: src/app/home/home.page.ts

import { Component, OnInit } from '@angular/core';
import { DbService } from '../servicios/db.service';
import { Usuario } from '../models/usuario'; // Importa las clases de modelos necesarias

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  // Propiedades para almacenar datos de la base de datos
  usuarios: Usuario[] = [];

  constructor(private dbService: DbService) {}

  // Inicializa la base de datos y carga los datos necesarios cuando se inicia la página
  ngOnInit() {
    this.dbService.dbState().subscribe((ready) => {
      if (ready) {
        this.loadUsuarios(); // Cargar usuarios existentes de la base de datos
      }
    });
  }

  // Crea un usuario de ejemplo
  addUsuario() {
    const nuevoUsuario: Usuario = {
      id_usuario: 1,  // El ID es autoincremental, se deja como null
      Nombre: 'Juan Pérez',
      Password: 'password123',
      Correo: 'juan.perez@gmail.com',
      Direccion: 'Calle Falsa 123',
      id_tipo_usuario: 1 // Asumiendo que 1 es un ID válido de tipo de usuario
    };

    this.dbService.addUsuario(nuevoUsuario).then(() => {
      console.log('Usuario añadido con éxito');
      this.loadUsuarios(); // Recargar los usuarios para reflejar los cambios
    }).catch((err) => {
      console.error('Error añadiendo usuario', err);
    });
  }

  // Método para cargar todos los usuarios desde la base de datos
  loadUsuarios() {
    // Aquí puedes implementar una función en DbService para obtener los usuarios
    // Ejemplo ficticio de llamada a método getUsuarios() en DbService:
    /*
    this.dbService.getUsuarios().then((data) => {
      this.usuarios = data;
    });
    */
  }
}
