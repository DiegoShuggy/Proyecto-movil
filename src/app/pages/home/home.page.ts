import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DbService } from '../../servicios/db.service';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  categories: Categoria[] = [];

  constructor(private navCtrl: NavController, private dbService: DbService) {}

  ngOnInit() {
    this.loadCategories();
  }

  async loadCategories() {
    this.categories = await this.dbService.getCategorias();
  }

  viewCategory(category: Categoria) {
    this.navCtrl.navigateForward(`/categoria/${category.id_categoria}`);
  }
}
