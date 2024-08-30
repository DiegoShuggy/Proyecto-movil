import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private navCtrl: NavController) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    if ((email === 'pedro@gmail.com' && password === '1234') || 
        (email === 'admin@gmail.com' && password === 'admin')) {
      this.navCtrl.navigateForward('/home'); // Redirige a la página de inicio
    } else {
      this.errorMessage = 'Correo electrónico o contraseña incorrectos';
    }
  }
}
