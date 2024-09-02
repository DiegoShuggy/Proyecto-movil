import { Component } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

interface AdminSection {
  name: string;
  route: string;
  image: string;
}

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.page.html',
  styleUrls: ['./home-admin.page.scss'],
})
export class HomeAdminPage {
  adminSections: AdminSection[] = [

    { name: 'Gestión de Categorías', route: 'gestion-categorias', image: 'assets/icon/categoria.png' },
    { name: 'Gestión de Productos', route: 'gestion-productos', image: 'assets/icon/categoria.png' }

  ];

  constructor(private navCtrl: NavController, private menuCtrl: MenuController) {}

  ngOnInit() {
    // Inicialización si es necesario
  }

  viewSection(section: AdminSection) {
    // Redireccionar a la ruta específica para la sección seleccionada
    this.navCtrl.navigateForward(`${section.route}`);
  }

  logout() {
    // Redirigir al usuario a la página de inicio
    this.navCtrl.navigateRoot('/inicio');
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);  // Desactiva el menú lateral
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);  // Activa el menú lateral nuevamente
  }
}
