import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FavoritosService } from '../../servicios/favoritos.service'; // Asegúrate de importar el servicio

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage {
  productosFavoritos: any[] = [];

  constructor(
    private favoritosService: FavoritosService,
    private alertController: AlertController
  ) {
    this.productosFavoritos = this.favoritosService.obtenerFavoritos();
  }

  async confirmarEliminacion(producto: any) {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que deseas eliminar este producto de tus favoritos?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.eliminarDeFavoritos(producto);
          },
        },
      ],
    });

    await alert.present();
  }

  eliminarDeFavoritos(producto: any) {
    this.favoritosService.eliminarDeFavoritos(producto);
    this.productosFavoritos = this.favoritosService.obtenerFavoritos();
  }
}
