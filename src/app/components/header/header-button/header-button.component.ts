import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Rota } from '../../../models/Rota';

@Component({
  selector: 'app-header-button',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-button.component.html',
  styleUrl: './header-button.component.css',
})
export class HeaderButtonComponent {
  rota = input.required<Rota>();
}
