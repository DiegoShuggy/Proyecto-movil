// src/app/pages/home/home.page.ts
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DbService } from '../../servicios/db.service';
import { Categoria } from '../../models/categoria';
import { UsuarioService } from '../../servicios/usuario.service';  // Agregar el servicio de usuario

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  categories: Categoria[] = [];
  usuarioLogueado: any = null;  // Variable para guardar al usuario logueado

  constructor(
    private navCtrl: NavController,
    private dbService: DbService,
    private usuarioService: UsuarioService  // Inyectar el servicio de usuario
  ) {}

  ngOnInit() {
    this.loadCategories();
    this.checkLoggedUser();  // Comprobar si hay un usuario logueado al iniciar
  }

  async loadCategories() {
    this.categories = await this.dbService.getCategorias();
  }

  viewCategory(category: Categoria) {
    this.navCtrl.navigateForward(`/categoria/${category.id_categoria}`);
  }

  // Método para verificar el usuario logueado y mantener persistencia
  async checkLoggedUser() {
    this.usuarioService.usuario$.subscribe((usuario) => {
      if (usuario) {
        this.usuarioLogueado = usuario;
      } else {
        this.navCtrl.navigateRoot('/login');  // Redirigir a login si no hay usuario
      }
    });
  }
}
