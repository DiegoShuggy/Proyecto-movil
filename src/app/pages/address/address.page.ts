import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage {
  ciudad: string = '';
  comuna: string = '';
  codigoPostal: string = '';
  direccion: string = '';
  telefono: string = '';
  errorMessage: string = '';
  formSubmitted: boolean = false;

  // Variables para validaciones
  ciudadValid: boolean = true;
  comunaValid: boolean = true;
  codigoPostalValid: boolean = true;
  telefonoValid: boolean = true;

  constructor(private navCtrl: NavController) {}

  onSubmit() {
    this.formSubmitted = true;
    this.errorMessage = '';

    // Validar campos
    this.ciudadValid = /^[a-zA-Z ]*$/.test(this.ciudad);
    this.comunaValid = /^[a-zA-Z ]*$/.test(this.comuna);
    this.codigoPostalValid = /^[0-9]*$/.test(this.codigoPostal);
    this.telefonoValid = /^[0-9]{9}$/.test(this.telefono);

    if (!this.ciudad || !this.comuna || !this.codigoPostal || !this.direccion || !this.telefono) {
      this.errorMessage = 'Todos los campos son requeridos.';
      return;
    }

    if (!this.ciudadValid) {
      this.errorMessage = 'La ciudad solo puede contener letras.';
      return;
    }

    if (!this.comunaValid) {
      this.errorMessage = 'La comuna solo puede contener letras.';
      return;
    }

    if (!this.codigoPostalValid) {
      this.errorMessage = 'El código postal solo puede contener números.';
      return;
    }

    if (!this.telefonoValid) {
      this.errorMessage = 'El teléfono debe contener solo 9 números.';
      return;
    }

    // Aquí puedes agregar la lógica para continuar con el pago
    this.navCtrl.navigateForward('/confirmacion');
  }
}
