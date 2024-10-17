// src/app/pages/registro/registro.page.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss']
})
export class RegistroPage {
  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private navCtrl: NavController,
    private toastController: ToastController
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        this.upperCaseValidator,
        this.numberValidator,
        this.specialCharValidator,
        Validators.minLength(4),
        Validators.maxLength(32)
      ]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  // Validador para una letra mayúscula
  upperCaseValidator(control: AbstractControl): ValidationErrors | null {
    const hasUpperCase = /[A-Z]/.test(control.value);
    return hasUpperCase ? null : { upperCase: true };
  }

  // Validador para al menos un número
  numberValidator(control: AbstractControl): ValidationErrors | null {
    const hasNumber = /\d/.test(control.value);
    return hasNumber ? null : { number: true };
  }

  // Validador para al menos un carácter especial
  specialCharValidator(control: AbstractControl): ValidationErrors | null {
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(control.value);
    return hasSpecialChar ? null : { specialChar: true };
  }

  // Validador para asegurar que las contraseñas coinciden
  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  // Método que se ejecuta al enviar el formulario
  async onSubmit() {
    this.submitted = true;

    // Si el formulario es inválido, no hacemos nada
    if (this.form.invalid) {
      return;
    }

    // Si el formulario es válido, creamos el objeto usuario y lo guardamos en la base de datos
    const nuevoUsuario: Usuario = new Usuario(
      this.form.value.name,
      this.form.value.password,
      this.form.value.email,
      '',  // Dirección por defecto
      1,   // Tipo de usuario por defecto (1: Cliente, 2: Administrador)
      '',  // Direcciones de envío por defecto
      new Blob() // Avatar inicialmente vacío
    );

    // Guardar el usuario a través del servicio de usuario
    try {
      await this.usuarioService.register(nuevoUsuario);
      const toast = await this.toastController.create({
        message: 'Usuario registrado exitosamente.',
        duration: 2000,
        color: 'success'
      });
      toast.present();
      this.navCtrl.navigateForward('/login');
    } catch (err) {
      console.error('Error al registrar el usuario', err);
      const toast = await this.toastController.create({
        message: 'Error al registrar el usuario. Inténtalo de nuevo.',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  }
}
