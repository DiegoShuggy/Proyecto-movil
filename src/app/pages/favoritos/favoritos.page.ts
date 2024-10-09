import { Component, OnInit } from '@angular/core';
//import { FavoritosService } from '../servicios/favoritos'; // Importar el servicio

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  favoritos: any[] = [];

  //constructor(private favoritosService: FavoritosService) { }

  ngOnInit() {
    //this.favoritos = this.favoritosService.obtenerFavoritos();
  }

  eliminarFavorito(index: number) {
    //this.favoritosService.eliminarFavorito(index);
    //this.favoritos = this.favoritosService.obtenerFavoritos(); // Actualizar la lista después de eliminar
  }
}
