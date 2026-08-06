import { Component, signal } from '@angular/core';
import { Usuarios } from './usuarios';


@Component({
  selector: 'app-array-usuarios',
  imports: [],
  templateUrl: './array-usuarios.html',
  styleUrl: './array-usuarios.css',
})
export class ArrayUsuarios {

  protected readonly usuarios = signal<Usuarios[]>([

    {
      id: 1,
      nome: 'ana',
      idade: 24
    },
    {
      id: 2,
      nome: 'Beatriz',
      idade: 27
    },
    {
      id: 3,
      nome: 'Maria',
      idade: 17
    },
   

  ]) 

}
