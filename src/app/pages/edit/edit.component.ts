import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MomentoService } from '../../services/momento.service';
import { Momento } from '../../models/Momento';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  momentoSelecionado: Momento = {} as Momento;
  momentoForm!: FormGroup;
  imagemPreview = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private momentoService: MomentoService,
    private router: Router,
  ) {}

  initForm(): void {
    this.momentoForm = new FormGroup({
      titulo: new FormControl(this.momentoSelecionado.titulo ?? '', [
        Validators.required,
      ]),
      descricao: new FormControl(this.momentoSelecionado.descricao ?? '', [
        Validators.required,
      ]),
      urlImagem: new FormControl(this.momentoSelecionado.urlImagem ?? ''),
    });
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (!id) return;

    this.momentoSelecionado = this.momentoService.getMomentoPorId(Number(id));

    this.initForm();

    this.imagemPreview = this.momentoSelecionado.urlImagem ?? '';
  }

  onSubmit(): void {
    console.log(this.momentoForm.value);
  }

  handleCancelEdit(): void {
    this.momentoForm.reset;
    this.router.navigateByUrl('/momentos');
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      this.imagemPreview = reader.result as string;

      this.momentoForm.patchValue({
        urlImagem: this.imagemPreview,
      });
    };

    reader.readAsDataURL(file);
  }
}
