import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  imports: [],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {

  protected logado = signal<boolean>(false);

  protected alterarEstado() {
    this.logado.update(estado => !estado);
  }

}
