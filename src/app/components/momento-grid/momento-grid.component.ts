import { Component, computed, input, signal } from '@angular/core';

import { Momento } from '../../models/Momento';
import { MomentoComponent } from '../momento/momento.component';

@Component({
  selector: 'app-momento-grid',
  standalone: true,
  imports: [MomentoComponent],
  templateUrl: './momento-grid.component.html',
  styleUrl: './momento-grid.component.css',
})
export class MomentoGridComponent {
  textoBusca = input('');
  momentos = signal<Momento[]>([
    {
      id: 1,
      titulo: 'Eu na praia',
      descricao: 'Estava na praia grande',
      data: new Date(),
      comentarios: [],
    },
    {
      id: 2,
      titulo: 'Cortei o cabelo',
      descricao: 'Fiquei com o cabelin na régua',
      data: new Date(),
      comentarios: [],
    },
    {
      id: 3,
      titulo: 'Meu carro novo',
      descricao: 'Lancei logo um civic',
      data: new Date(),
      comentarios: [],
    },
  ]);

  filteredMomentos = computed(() => {
    const busca = this.textoBusca().toLowerCase();
    return this.momentos().filter((momento) =>
      momento.titulo.toLowerCase().includes(busca),
    );
  });
}
