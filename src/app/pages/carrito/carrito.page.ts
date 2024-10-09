import { Component, OnInit } from '@angular/core';
import { DbService } from '../../servicios/db.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  cartItems: any[] = [];
  totalCost: number = 0;

  constructor(private dbService: DbService) {}

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
}
