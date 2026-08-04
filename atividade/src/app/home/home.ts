import { Component } from '@angular/core';
import { Nav } from './nav/nav';
import { Atividades } from './atividades/atividades';

@Component({
  selector: 'app-home',
  imports: [Nav,Atividades],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
