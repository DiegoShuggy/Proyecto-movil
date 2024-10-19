import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../models/usuario';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario | null>(null);
  usuario$ = this.usuarioSubject.asObservable();
  
  constructor(private db: DbService) {
    this.loadUserData();
  }

  // Cargar los datos del usuario actual desde la base de datos
  private async loadUserData() {
    try {
      const currentUserId = await this.db.getCurrentUserId();
      if (currentUserId) {
        const usuario = await this.db.getUsuarioById(currentUserId);
        if (usuario) {
          this.usuarioSubject.next(usuario);
        }
      }
    } catch (error) {
      console.error('Error al cargar los datos del usuario:', error);
    }
  }

  // Método de login
  async login(email: string, password: string): Promise<boolean> {
    try {
      const usuario = await this.db.login(email, password);
      if (usuario) {
        this.usuarioSubject.next(usuario);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error en el login:', error);
      return false;
    }
  }

  // Método de logout
  async logout(): Promise<void> {
    try {
      await this.db.clearSession();
      this.usuarioSubject.next(null); // Limpia el observable
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }

  // Método para registrar un nuevo usuario
  async register(usuario: Usuario): Promise<void> {
    try {
      await this.db.register(usuario); // Asegúrate de que el avatar se esté guardando
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      throw error;
    }
  }

  // Método para obtener el usuario actual
  async getCurrentUser(): Promise<Usuario | null> {
    const id_usuario = await this.db.getUsuario(); // Obtener ID del usuario
    if (id_usuario) {
      return this.db.getUsuarioById(id_usuario); // Usar el método que obtenga los datos del usuario en función del ID
    } else {
      return null;
    }
  }

  async updateUsuario(usuario: Usuario) {
    return this.db.executeSql(
      'UPDATE Usuario SET Nombre = ?, Correo = ?, Password = ?, Direccion = ?, id_tipo_usuario = ?, dirreciones_envio = ?, avatar = ? WHERE id_usuario = ?',
      [usuario.Nombre, usuario.Correo, usuario.Password, usuario.Direccion, usuario.id_tipo_usuario, usuario.dirreciones_envio, usuario.avatar, usuario.id_usuario]
    );
  }
  


  // Método para actualizar solo el avatar
  async updateAvatar(avatar: string): Promise<void> {
    const usuario = this.usuarioSubject.value;
    if (usuario && usuario.id_usuario !== undefined && usuario.id_usuario !== null) {
      try {
        usuario.avatar = avatar;
        await this.db.modImagenPerfil(usuario.id_usuario, avatar); // Asegúrate de que este método exista en tu db.service.ts
        this.usuarioSubject.next(usuario); // Actualizar el observable
      } catch (error) {
        console.error('Error al actualizar el avatar:', error);
      }
    } else {
      console.error('El ID del usuario es indefinido o nulo.');
    }
  }
}
