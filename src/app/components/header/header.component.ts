import { Component } from '@angular/core';
import { HeaderButtonComponent } from './header-button/header-button.component';
import { Rota } from '../../models/Rota';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderButtonComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  rotas: Rota[] = [
    { nome: 'Momentos', link: 'momentos' },
    { nome: 'Compartilhar', link: 'compartilhar' },
    { nome: 'Sobre', link: 'sobre' },
  ];
}
