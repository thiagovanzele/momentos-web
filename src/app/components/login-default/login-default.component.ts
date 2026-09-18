import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-login-default',
  standalone: true,
  imports: [],
  templateUrl: './login-default.component.html',
  styleUrl: './login-default.component.css',
})
export class LoginDefaultComponent {
  tituloPagina = input.required<string>();
  btnPrimarioTxt = input.required<string>();
  btnSecundarioTxt = input.required<string>();

  onSubmitPrimary = output<void>();
  onSubmitSecondary = output<void>();
}
