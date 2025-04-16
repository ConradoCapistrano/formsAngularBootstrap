import { Component } from '@angular/core';

@Component({
  selector: 'app-rodape',
  standalone: true,
  imports: [],
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent {
  readonly currentYear: number = new Date().getFullYear();
  readonly logoPath: string = '../../../../assets/logo-alura.png';
  readonly logoAltText: string = 'Logo da Alura';
  readonly copyrightText: string = `© ${this.currentYear} Grupo Alura. Todos os direitos reservados.`;
}