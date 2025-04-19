import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao-formulario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botao-formulario.component.html',
  styleUrl: './botao-formulario.component.css'
})
export class BotaoFormularioComponent {

  @Input() texto: string = 'Botão';
  @Input() estilo: string = 'btn btn-primary';
  @Output() acao = new EventEmitter<void>();

}
