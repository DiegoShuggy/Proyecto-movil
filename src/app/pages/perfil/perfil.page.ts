import { Component } from '@angular/core';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {

  // Valores iniciales por defecto
  nombre: string = 'Pepe';
  correo: string = 'pepe@gmail.com';
  contrasena: string = '1234';
  direccion: string = 'Avenida Falsa 23, 2051';

  

 
}
