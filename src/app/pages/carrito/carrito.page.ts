import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DbService } from '../../servicios/db.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  cartItems: any[] = [];
  totalCost: number = 0;

  constructor(
    private dbService: DbService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.dbService.dbState().subscribe(isReady => {
      if (isReady) {
        this.loadCartItems();
      } else {
        console.error('Database is not ready');
      }
    });
  }

  async loadCartItems() {
    this.cartItems = await this.dbService.getCartItems();
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalCost = this.cartItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  }

  async confirmarEliminacion(item: any) {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que deseas eliminar este producto del carrito?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.eliminarDelCarrito(item);
          },
        },
      ],
    });

    await alert.present();
  }

  async eliminarDelCarrito(item: any) {
    await this.dbService.deleteFromCart(item.id_producto);
    this.loadCartItems();
  }
}
