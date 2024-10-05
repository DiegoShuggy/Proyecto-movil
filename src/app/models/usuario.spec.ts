import { Usuario } from './usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  // Un array para almacenar usuarios
  usuarios: Usuario[] = [];

  constructor() {}

  // Método para agregar un nuevo usuario
  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  // Obtener todos los usuarios
  obtenerUsuarios(): Usuario[] {
    return this.usuarios;
  }
}


