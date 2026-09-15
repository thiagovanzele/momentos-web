import { Component, input } from '@angular/core';
import { Momento } from '../../models/Momento';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-momento',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './momento.component.html',
  styleUrl: './momento.component.css'
})
export class MomentoComponent {

  momento = input.required<Momento>();

}
