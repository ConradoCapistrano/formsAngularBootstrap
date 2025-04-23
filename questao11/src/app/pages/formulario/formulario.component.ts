import { FormsModule } from "@angular/forms";
import { Formulario } from "./formulario";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {

  @Input() formulario: Formulario = {
    id: 0,
    pensamentoTexto: 'exemplo de texto',
    autor: 'Conrado',
    modelo: 1
  }
  @Output() formularioExcluido = new EventEmitter<number>();

  constructor() {}

  excluirFormulario() {
    if(this.formulario.id) {
      this.formularioExcluido.emit(this.formulario.id);
    }
  }

  getModeloClass(): string {
    return `modelo${this.formulario.modelo}`;
  }
}