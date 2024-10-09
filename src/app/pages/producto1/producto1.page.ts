import { Component, OnInit } from '@angular/core';
//import { FavoritosService } from 'src/app/servicios/favoritos';


@Component({
  selector: 'app-producto1',
  templateUrl: './producto1.page.html',
  styleUrls: ['./producto1.page.scss'],
})
export class Producto1Page implements OnInit {

  producto = {
    nombre: 'Collar de pompones',
    precio: 9999,
    imagen: '/assets/icon/producto1.png'
  };

  //constructor(private favoritosService: FavoritosService) { }

  ngOnInit() {
  }

  agregarAFavoritos() {
    //this.favoritosService.agregarFavorito(this.producto);
  }
}
