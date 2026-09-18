import { Component, OnInit, output } from '@angular/core';
import { LoginDefaultComponent } from '../../components/login-default/login-default.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

interface LoginProps {
  email: FormControl<string>;
  senha: FormControl<string>;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginDefaultComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  tituloPagina = 'Faça o login';
  primaryButton = 'Login';
  secondaryButton = 'Cadastrar';

  constructor(private router: Router) {

  }

  loginForm!: FormGroup<LoginProps>;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      senha: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(6)],
      }),
    });
  }

  submitLogin(): void {
    if (this.loginForm.invalid) {
      console.error('login invalido');
      this.loginForm.markAllAsTouched();
      return;
    }

    const login = this.loginForm.value;

    console.log(login);
  }

  navigateCadastrar(): void {
    this.router.navigateByUrl('/cadastrar');
  }
}
