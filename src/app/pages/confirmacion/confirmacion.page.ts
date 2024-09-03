import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.page.html',
  styleUrls: ['./confirmacion.page.scss'],
})
export class ConfirmacionPage {
  cardholderName: string = '';
  cardNumber: string = '';
  expirationMonth: number | null = null;
  expirationYear: number | null = null;
  cvv: number | null = null;
  formSubmitted: boolean = false;

  constructor(private router: Router) {}

  get formIsValid(): boolean {
    return (
      this.cardholderName.trim() !== '' &&
      this.cardNumber.trim() !== '' &&
      this.expirationMonth !== null &&
      this.expirationMonth >= 1 && this.expirationMonth <= 12 &&
      this.expirationYear !== null &&
      this.expirationYear >= 2023
    );
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.formIsValid) {
      this.router.navigate(['/pago']);
    }
  }
}
