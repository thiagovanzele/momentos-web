import { Component, OnInit } from '@angular/core';
import { LoginDefaultComponent } from '../../components/login-default/login-default.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

interface CadastroProps {
  nome: FormControl<string>;
  email: FormControl<string>;
  senha: FormControl<string>;
  confirmacaoSenha: FormControl<string>;
}

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [LoginDefaultComponent, ReactiveFormsModule],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css',
})
export class CadastrarComponent implements OnInit {
  tituloPagina = 'Cadastre sua Conta';
  primaryButton = 'Cadastrar';
  secondaryButton = 'Fazer Login';

  constructor(private router: Router) {}

  cadastroForm!: FormGroup<CadastroProps>;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.cadastroForm = new FormGroup({
      nome: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),

      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),

      senha: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(6)],
      }),

      confirmacaoSenha: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(6)],
      }),
    });
  }

  submitCadastro(): void {
    if (this.cadastroForm.invalid) {
      console.error('cadastro Invalido');
      this.cadastroForm.markAllAsTouched();
      return;
    }

    const cadastro = this.cadastroForm.value;

    console.log(cadastro);
  }

  navigateLogin(): void {
    this.router.navigateByUrl('/');
  }
}
