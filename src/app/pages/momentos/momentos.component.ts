import { Component, signal } from '@angular/core';
import { CabecalhoComponent } from '../../components/cabecalho/cabecalho.component';
import { MomentoGridComponent } from '../../components/momento-grid/momento-grid.component';

@Component({
  selector: 'app-momentos',
  standalone: true,
  imports: [CabecalhoComponent, MomentoGridComponent],
  templateUrl: './momentos.component.html',
  styleUrl: './momentos.component.css',
})
export class MomentosComponent {
  textoBusca = signal('');
}
