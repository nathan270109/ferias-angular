import { Component, signal } from '@angular/core';
import { Aluno } from './aluno';
import { form, FormField, max, min, required } from '@angular/forms/signals';



@Component({
  selector: 'app-notas',
  imports: [FormField],
  templateUrl: './notas.html',
  styleUrl: './notas.css',
})
export class Notas {

  protected alunoModel = signal<Aluno>({
    nome: '',
    media: null
  });

  protected alunoForm = form(this.alunoModel, (s) => {
    
    required(s.nome, {message:'O nome do aluno é obrigatório'});

    required(s.media, {message: 'A média é obrigatória'});
    min(s.media, 0, { message:'Média nao pode ser menor do que 0' });
    max(s.media, 10, { message: 'Média nao pode ser maior que 10'});
  });

  protected alunos = signal<Aluno[]>([]);

  protected cadastrarAluno(event: SubmitEvent) {
    event.preventDefault();

    const aluno = this.alunoModel();

    this.alunos.update(valor => [...valor,aluno]);

    this.alunoModel.set({
      nome: '',
      media: null
    })

    this.alunoForm().reset()
  }


}
