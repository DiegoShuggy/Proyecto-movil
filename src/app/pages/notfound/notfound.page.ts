import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.page.html',
  styleUrls: ['./notfound.page.scss'],
})
export class NotfoundPage implements OnInit, OnDestroy {

  constructor(private menuCtrl: MenuController) {}

  ngOnInit() {
    // Deshabilitar el menú lateral cuando se accede a la página de error 404
    this.menuCtrl.enable(false);
  }

  ngOnDestroy() {
    // Habilitar el menú lateral cuando se abandona la página de error 404
    this.menuCtrl.enable(true);
  }
}
