import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  cartItems: any[] = [];
  totalCost: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartItems = this.carritoService.obtenerProductos();
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalCost = this.carritoService.obtenerTotal();
  }

  eliminarDelCarrito(producto: any) {
    this.carritoService.eliminarProducto(producto);
    this.loadCartItems();
  }
}
