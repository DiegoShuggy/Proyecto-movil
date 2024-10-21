import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
//import { initOneSignal } from '../OneSignalConfig'; // Asegúrate de importar la configuración

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform, private router: Router) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
  //    initOneSignal(); // Inicializa OneSignal aquí
    });
  }

  redirectToHome() {
    this.router.navigate(['/inicio']);
  }
}
