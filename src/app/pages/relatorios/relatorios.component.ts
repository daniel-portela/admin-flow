import { Component } from '@angular/core';
import { RelatoriosDetalhesComponent } from './relatorios-detalhes/relatorios-detalhes.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [RelatoriosDetalhesComponent, CommonModule],
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss'],
})

export class RelatoriosComponent {
  usuarios = [
    {
      id: 1,
      nome: 'Maria Silva',
      idade: 25,
      cidade: 'São Paulo',
      email: 'maria@example.com',
      profissao: 'Desenvolvedora',
    },
    {
      id: 2,
      nome: 'João Pereira',
      idade: 30,
      cidade: 'Rio de Janeiro',
      email: 'joao@example.com',
      profissao: 'Engenheiro',
    },
    {
      id: 3,
      nome: 'Ana Costa',
      idade: 22,
      cidade: 'Belo Horizonte',
      email: 'ana@example.com',
      profissao: 'Designer',
    },
    {
      id: 4,
      nome: 'Carlos Souza',
      idade: 28,
      cidade: 'Curitiba',
      email: 'carlos@example.com',
      profissao: 'Analista de Sistemas',
    },
  ];

  selectedUser: any;

  selectUser(user: any) {
    this.selectedUser = user;
  }
}
