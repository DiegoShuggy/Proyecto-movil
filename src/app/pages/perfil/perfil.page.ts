import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: Usuario = {} as Usuario;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.usuario$.subscribe(usuario => {
      if (usuario) {
        this.usuario = usuario;
      }
    });
  }

  createObjectURL(blob: Blob): string {
    return URL.createObjectURL(blob);
  }
}
