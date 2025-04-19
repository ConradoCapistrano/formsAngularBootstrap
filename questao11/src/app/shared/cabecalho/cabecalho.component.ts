import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {
  readonly logoPath: string = '/assets/logo-memoteca.webp';
  readonly logoAltText: string = 'Logo da aplicação Memoteca';
  readonly computerImagePath: string = '/assets/computador-cabecalho.webp';
  readonly computerImageAltText: string = 'Imagem de um computador';
  readonly descriptionText: string = 'Guarde trechos de músicas, citações de livros, pensamentos e suas melhores ideias.';
}