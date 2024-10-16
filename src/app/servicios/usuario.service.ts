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

  constructor(private dbService: DbService) {
    this.loadUserData();
  }

  private async loadUserData() {
    try {
      const usuarios = await this.dbService.getUsuarios();
      if (usuarios.length > 0) {
        this.usuarioSubject.next(usuarios[0]); // Asignar solo el primer usuario
      }
    } catch (error) {
      console.error('Error al cargar los datos del usuario:', error);
    }
  }
  

  async updateUsuario(usuario: Usuario) {
    try {
      await this.dbService.updateUsuario(usuario);
      this.usuarioSubject.next(usuario);
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
    }
  }
}
