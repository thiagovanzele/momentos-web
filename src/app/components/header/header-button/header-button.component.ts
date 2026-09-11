import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Rota } from '../../../models/rota';

@Component({
  selector: 'app-header-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-button.component.html',
  styleUrl: './header-button.component.css',
})
export class HeaderButtonComponent {
  rota = input.required<Rota>();
}
