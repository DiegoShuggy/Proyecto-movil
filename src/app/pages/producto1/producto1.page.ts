import { Component, OnInit } from '@angular/core';
import { DbService } from '../../servicios/db.service';


@Component({
  selector: 'app-producto1',
  templateUrl: './producto1.page.html',
  styleUrls: ['./producto1.page.scss'],
})
export class Producto1Page implements OnInit {

  constructor(private dbService: DbService) { }

  ngOnInit() {
  }

  async addToCart() {
    const id_producto = 1; // ID del producto que deseas añadir
    const cantidad = 1; // Cantidad del producto
    await this.dbService.addToCart(id_producto, cantidad);
  }

}
