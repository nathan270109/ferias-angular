import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-atividades',
  imports: [],
  templateUrl: './atividades.html',
  styleUrl: './atividades.css',
})
export class Atividades {

// protected contador = signal<number>(0)

// private limiteImposto = 999;

// protected incrementarValor() {
//   this.contador.update(valor => valor + 1)
//   this.checarValor();
// }

// private checarValor() {
//   if (this.contador() > this.limiteImposto) {
//     this.contador.set(0)
//   }
// }

// protected redefinirValor() {
//   this.contador.set(0)
// }

///////////////////////////////////////////////////

protected logado = signal<boolean>(false);

protected alterarEstado() {
  this.logado.update(estado => !estado);
}

/////////////////////////////////////////////

// protected urlImage = signal<string>("")

}
