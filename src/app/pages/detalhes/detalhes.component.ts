import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MomentoService } from '../../services/momento.service';
import { Momento } from '../../models/Momento';
import { DatePipe, NgClass } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Comentario } from '../../models/Comentario';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [DatePipe, ReactiveFormsModule, NgClass, ModalComponent],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css',
})
export class DetalhesComponent implements OnInit {
  addComentarioForm!: FormGroup;
  modalAberto = false;

  initForm() {
    this.addComentarioForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      texto: new FormControl('', [Validators.required]),
    });
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private momentoService: MomentoService,
    private router: Router,
  ) {}

  momentoSelecionado: Momento = {} as Momento;

  ngOnInit(): void {
    this.initForm();
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (!id) return;

    this.momentoSelecionado = this.momentoService.getMomentoPorId(Number(id));
  }

  abrirModal(): void {
    this.modalAberto = true;
  }

  fecharModal(): void {
    this.modalAberto = false;
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

  isFormularioValido(): boolean {
    if (!this.addComentarioForm.touched) return false;

    return this.addComentarioForm.valid;
  }

  handleDelete(): void {
    console.log('excluindo o bicho');
    this.fecharModal();
    this.router.navigateByUrl('/momentos');
  }

  handleEdit(): void {
    this.router.navigate(['/momentos/editar/', this.momentoSelecionado.id]);
  }
}
