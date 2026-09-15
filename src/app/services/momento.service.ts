import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Momento } from '../models/Momento';

@Injectable({
  providedIn: 'root',
})
export class MomentoService {
  constructor(private httpCliente: HttpClient) {}

  getMomentoPorId(id: number): Momento {
    return {
      id: 1,
      titulo: 'Tô na praia',
      descricao: 'To logo na praia grande',
      data: new Date(),
      comentarios: [{ nome: 'Thiago', texto: 'Gostei muito', data: new Date() }, { nome: 'Tamires', texto: 'Você arrasou', data: new Date() }],
    } as Momento;
  }
}
