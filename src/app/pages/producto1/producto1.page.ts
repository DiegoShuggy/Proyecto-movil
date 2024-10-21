import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoritosService } from '../../servicios/favoritos.service';
import { CarritoService } from '../../servicios/carrito.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-producto1',
  templateUrl: './producto1.page.html',
  styleUrls: ['./producto1.page.scss'],
})
export class Producto1Page implements OnInit {
  producto: any = {
    nombre: 'Producto Ejemplo',
    precio: 50,
    descripcion: 'Descripción del producto',
    imagen: 'ruta/a/imagen',
  };
  enFavoritos: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private favoritosService: FavoritosService,
    private carritoService: CarritoService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    // Cargar estado de favoritos
    this.enFavoritos = this.favoritosService.existeEnFavoritos(this.producto); // Cambié 'estaEnFavoritos' por 'existeEnFavoritos'
  }

  // Agregar o eliminar de favoritos
  agregarAFavoritos() {
    if (this.enFavoritos) {
      this.favoritosService.eliminarDeFavoritos(this.producto);
    } else {
      this.favoritosService.agregarAFavoritos(this.producto);
    }
    this.enFavoritos = !this.enFavoritos; // Alternar estado
  }

  // Agregar producto al carrito
  addToCart() {
    this.carritoService.agregarProducto(this.producto, 1); // Añadir con cantidad 1
    this.mostrarToast('Producto agregado al carrito');
  }

  // Mostrar toast de confirmación
  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
    });
    toast.present();
  }
}
