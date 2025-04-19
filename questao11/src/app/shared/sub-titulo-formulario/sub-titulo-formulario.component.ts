import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-titulo-formulario',
  standalone: true,
  imports: [],
  templateUrl: './sub-titulo-formulario.component.html',
  styleUrl: './sub-titulo-formulario.component.css'
})
export class SubTituloFormularioComponent {

  @Input() texto: string = '';
}
