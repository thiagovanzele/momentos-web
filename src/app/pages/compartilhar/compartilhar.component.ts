import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Momento } from '../../models/Momento';

@Component({
  selector: 'app-compartilhar',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './compartilhar.component.html',
  styleUrl: './compartilhar.component.css',
})
export class CompartilharComponent implements OnInit {
  imagemPreview = '';
  momentoForm!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.momentoForm = new FormGroup({
      titulo: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
      urlImagem: new FormControl('', Validators.required),
    });
  }

  handleCancel(): void {
    this.router.navigateByUrl('/momentos');
  }

  handleSave(): void {
    const momento: Momento = this.momentoForm.value;
    console.log(momento);
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
