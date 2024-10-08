import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { DbService } from '../../servicios/db.service';  // Importa el servicio de la base de datos
import { Usuario } from '../../models/usuario';  // Importa el modelo de Usuario
import { NavController } from '@ionic/angular';  // Para navegar después del registro

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
    private dbService: DbService,  // Inyecta el servicio de base de datos
    private navCtrl: NavController  // Para la navegación después del registro
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
    }, { validator: this.passwordMatchValidator });
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
  onSubmit() {
    this.submitted = true;

    // Si el formulario es inválido, no hacemos nada
    if (this.form.invalid) {
      return;
    }

    // Si el formulario es válido, creamos el objeto usuario y lo guardamos en la base de datos
    const nuevoUsuario: Usuario = {
      id_usuario: undefined,  // Dejar como null para que SQLite lo autoincremente
      Nombre: this.form.value.name,
      Correo: this.form.value.email,
      Password: this.form.value.password,
      Direccion: '',  // Puedes agregar un campo para dirección si es necesario
      id_tipo_usuario: 1  // Asignamos 1 como tipo de usuario (clientes) o 2 para usuario tipo administrador
    };

    // Verificar si la base de datos está lista antes de agregar el usuario
    this.dbService.dbState().subscribe(isReady => {
      if (isReady) {
        // Guardar el usuario en la base de datos a través del servicio
        this.dbService.addUsuario(nuevoUsuario).then(() => {
          console.log('Usuario registrado exitosamente');
          // Redirigimos al usuario a la página de inicio de sesión u otra página
          this.navCtrl.navigateForward('/login');
        }).catch((err) => {
          console.error('Error al registrar el usuario', err);
        });
      } else {
        console.error('Database is not ready');
      }
    });
  }
}
