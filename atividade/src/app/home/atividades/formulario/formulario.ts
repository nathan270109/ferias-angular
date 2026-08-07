import { Component, signal } from '@angular/core';
import { Produto } from './produto';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-formulario',
  imports: [FormField],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

  protected produtoModel = signal<Produto>({
    titulo: '',
    descricao: '',
    preco: null
  })

  protected produtoForm = form(this.produtoModel);

  protected produtos = signal<Produto[]>([]);



  protected cadastrarProduto(event: SubmitEvent) {
    
    event.preventDefault();

    const produto = this.produtoModel();

    console.log('produto cadastrado')

    this.produtos.update(valor => [...valor,produto])

    this.produtoModel.set({
      titulo: '',
      descricao: '',
      preco: null
    })
  }

  

}


