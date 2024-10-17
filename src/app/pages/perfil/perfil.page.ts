// src/app/pages/perfil/perfil.page.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import { Subscription } from 'rxjs';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit, OnDestroy {
  usuario: Usuario | null = null;
  avatarURL: string | ArrayBuffer | null = null;
  private usuarioSubscription: Subscription | undefined;

  constructor(
    private usuarioService: UsuarioService,
    private navCtrl: NavController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.usuarioSubscription = this.usuarioService.usuario$.subscribe(usuario => {
      if (usuario) {
        this.usuario = usuario;
        this.setAvatarURL(usuario.avatar);
      } else {
        this.usuario = null;
        this.avatarURL = null;
      }
    });
  }

  ngOnDestroy() {
    this.usuarioSubscription?.unsubscribe();
  }

  // Convertir el avatar en una URL para mostrarlo
  setAvatarURL(avatar: Blob | undefined) {
    if (avatar) {
      this.avatarURL = URL.createObjectURL(avatar);
    } else {
      this.avatarURL = null;
    }
  }

  // Método para cerrar sesión
  async cerrarSesion() {
    try {
      await this.usuarioService.logout();
      const toast = await this.toastController.create({
        message: 'Sesión cerrada correctamente.',
        duration: 2000,
        color: 'success'
      });
      toast.present();
      this.navCtrl.navigateRoot('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      const toast = await this.toastController.create({
        message: 'Error al cerrar sesión.',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  }
}
