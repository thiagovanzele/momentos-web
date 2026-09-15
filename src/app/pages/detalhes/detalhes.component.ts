import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MomentoService } from '../../services/momento.service';
import { Momento } from '../../models/Momento';
import { DatePipe } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Comentario } from '../../models/Comentario';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [DatePipe, ReactiveFormsModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css',
})
export class DetalhesComponent implements OnInit {
  addComentarioForm!: FormGroup;

  initForm() {
    this.addComentarioForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      texto: new FormControl('', [Validators.required]),
    });
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private momentoService: MomentoService,
  ) {}

  momentoSelecionado: Momento = {} as Momento;

  ngOnInit(): void {
    this.initForm();
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (!id) return;

    this.momentoSelecionado = this.momentoService.getMomentoPorId(Number(id));
  }

  onSubmit(): void {
    if (this.addComentarioForm.valid) {
      const novoComentario: Comentario = this.addComentarioForm.value;
      novoComentario.data = new Date();

      console.log(novoComentario);

      this.momentoSelecionado.comentarios.push(novoComentario);

      this.addComentarioForm.reset();
    }
  }
}
