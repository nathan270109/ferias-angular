import { Service, signal } from '@angular/core';
import { Produto } from './produto';

@Service()
export class FormularioService {

    cadastroLogin = signal<Produto[]>([])

    cadastrarUser(user: Produto) {
        this.cadastroLogin.update(item => [...item, user])
    }

}
