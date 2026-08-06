import { Component } from '@angular/core';
import { Atividades } from './atividades/atividades';

@Component({
  selector: 'app-home',
  imports: [Atividades],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
