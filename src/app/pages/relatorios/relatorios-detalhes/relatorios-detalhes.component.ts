import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-relatorios-detalhes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './relatorios-detalhes.component.html',
  styleUrl: './relatorios-detalhes.component.scss',
})

export class RelatoriosDetalhesComponent {
  @Input() usuario: any;
}
