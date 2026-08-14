import { Component} from '@angular/core';
import { Cadastro } from './cadastro/cadastro';
import { Contador } from './contador/contador';
import { ImagemIlustrativa } from './imagem-ilustrativa/imagem-ilustrativa';
import { ArrayUsuarios } from './array-usuarios/array-usuarios';
import { Formulario } from './formulario/formulario';
import { Notas } from "./notas/notas";


@Component({
  selector: 'app-atividades',
  imports: [Cadastro, Contador, ImagemIlustrativa, ArrayUsuarios, Formulario, Notas],
  templateUrl: './atividades.html',
  styleUrl: './atividades.css',
})
export class Atividades {

  

}
