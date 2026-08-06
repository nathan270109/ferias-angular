import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-imagem-ilustrativa',
  imports: [FormsModule],
  templateUrl: './imagem-ilustrativa.html',
  styleUrl: './imagem-ilustrativa.css',
})
export class ImagemIlustrativa {
  protected urlImagem = signal<string>("")

}
