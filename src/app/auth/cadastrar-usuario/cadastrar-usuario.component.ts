import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { Pessoa } from '../../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.scss'],
})
export class CadastrarUsuarioComponent {
  formulario: FormGroup;
  btnCadastrar: boolean = true;
  vetor: Pessoa[] = [];
  indice: number = -1;

  constructor() {
    this.formulario = new FormGroup({
      nome: new FormControl<string | null>(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      idade: new FormControl<number | null>(null, [
        Validators.required,
        Validators.min(0),
        Validators.max(120),
      ]),
      cidade: new FormControl<string | null>(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  private criarPessoa(): Pessoa {
    return {
      nome: this.formulario.value.nome || '',
      idade: this.formulario.value.idade || 0,
      cidade: this.formulario.value.cidade || '',
    };
  }

  cadastrar(): void {
    if (this.formulario.valid) {
      this.vetor.push(this.criarPessoa());
      this.formulario.reset();
    }
  }

  selecionar(indice: number): void {
    this.indice = indice;
    const pessoaSelecionada = this.vetor[indice];
    this.formulario.setValue({
      nome: pessoaSelecionada.nome || '',
      idade: pessoaSelecionada.idade || null,
      cidade: pessoaSelecionada.cidade || '',
    });
    this.btnCadastrar = false;
  }

  alterar(): void {
    if (this.indice >= 0 && this.formulario.valid) {
      this.vetor[this.indice] = this.criarPessoa();
      this.formulario.reset();
      this.btnCadastrar = true;
    }
  }

  remover(): void {
    if (this.indice >= 0) {
      this.vetor.splice(this.indice, 1);
      this.formulario.reset();
      this.btnCadastrar = true;
    }
  }

  cancelar(): void {
    this.formulario.reset();
    this.btnCadastrar = true;
  }
}
