import { Component } from '@angular/core';

@Component({
  selector: 'app-rodape',
  standalone: true,
  imports: [],
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.css'
})
export class RodapeComponent {
  readonly currentYear: number = new Date().getFullYear();
  readonly logoPath: string = '/assets/logo-alura.webp';
  readonly logoAltText: string = 'Logo da Alura';
  readonly copyrightText: string = `© ${this.currentYear} Grupo Alura. Todos os direitos reservados.`;
}