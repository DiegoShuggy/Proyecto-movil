import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

interface Category {
  name: string;
  route: string;
  image: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  categories: Category[] = [
    { name: 'Accesorios', route: 'categoria1', image: 'assets/icon/accesorios.jpg' },
    { name: 'Loza/Vajilla/Cerámica', route: 'categoria2', image: 'assets/icon/loza.jpg' },
    { name: 'Manteles Mesa/Individuales', route: 'categoria3', image: 'assets/icon/manteles.jpg' },
  ];

  constructor(private navCtrl: NavController) {}

  viewCategory(category: Category) {
    // Redireccionar a la ruta específica para la categoría seleccionada
    this.navCtrl.navigateForward(`/products/${category.route}`);
  }
}
