// src/app/servicios/usuario.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../models/usuario';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario | null>(null);
  public usuario$ = this.usuarioSubject.asObservable();

  constructor(private dbService: DbService) {
    this.loadUserData();
  }

  // Carga los datos del usuario actual desde la base de datos
  private async loadUserData() {
    try {
      const currentUserId = await this.dbService.getCurrentUserId();
      if (currentUserId) {
        const usuario = await this.dbService.getUsuarioById(currentUserId);
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
      const usuario = await this.dbService.login(email, password);
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
      await this.dbService.clearSession();
      this.usuarioSubject.next(null);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }

  // Método para registrar un nuevo usuario
  async register(usuario: Usuario): Promise<void> {
    try {
      await this.dbService.register(usuario);
      // Después del registro, puedes redirigir al usuario a la página de login
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      throw error;
    }
  }

  // Método para actualizar el perfil del usuario
  async updateUsuario(usuario: Usuario): Promise<void> {
    try {
      await this.dbService.updateUsuario(usuario);
      this.usuarioSubject.next(usuario);
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      throw error;
    }
  }
}
