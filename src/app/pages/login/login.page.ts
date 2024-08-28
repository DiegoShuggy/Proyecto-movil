import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  apellido: string = "Rodriguez";
  edad: number = 25;
  usuario: string = "dd";

  Persona: any = {
    nombre: 'José',
    apellido: 'Josca',
    edad: 35
  }

  listaP: any = [
    {
      id: 5,
      comuna: 'Lo espejo'
    },
    {
      id: 7,
      comuna: 'Las Condes'
    },
    {
      id: 9,
      comuna: 'Huechuraba'
    }
  ]
  constructor(private router: Router, private alertController: AlertController, private toastController: ToastController) { }

  ngOnInit() {
  }
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 2500,
      position: position,
    });

    await toast.present();
  }

  async presentAlert(titulo:string, texto:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: texto,
      buttons: ['OK'],
    });

    await alert.present();
  }

  irPagina(){
    //declarar mi variable de contexto para enviar la información
    let navigationextras: NavigationExtras = {
      state:{
        ape: this.apellido,
        ed: this.edad,
        user: this.usuario
      }
    }
    this.presentToast('bottom');
    //this.presentAlert('Soy un titulo', 'Soy un mensaje');
    //aqui se puede ejecutar logica de codigo
    this.router.navigate(['/agregar'], navigationextras);
  }

}
