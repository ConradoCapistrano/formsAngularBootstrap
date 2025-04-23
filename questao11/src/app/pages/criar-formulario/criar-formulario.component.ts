import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormularioService } from '../../shared/formulario.service';
import { Formulario } from '../formulario/formulario';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SubTituloFormularioComponent } from '../../shared/sub-titulo-formulario/sub-titulo-formulario.component';
import { BotaoFormularioComponent } from '../../shared/botao-formulario/botao-formulario.component';

@Component({
  selector: 'app-criar-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule, SubTituloFormularioComponent, BotaoFormularioComponent],
  templateUrl: './criar-formulario.component.html',
  styleUrl: './criar-formulario.component.css'
})
export class CriarFormularioComponent {

  formulario: Formulario = {
    pensamentoTexto: '',
    autor: '',
    modelo: 1
  };

  estiloBotao = 'botao btn text-light';

  readonly MODELOS = [
    { id: 1, nome: 'Modelo 1', classe: 'modelo1' },
    { id: 2, nome: 'Modelo 2', classe: 'modelo2' },
    { id: 3, nome: 'Modelo 3', classe: 'modelo3' }
  ];

  constructor(
    private readonly formularioService: FormularioService,
    private readonly router: Router
  ) { }

  criarPensamento(): void {
    this.formularioService.criar(this.formulario).subscribe({
      next: () => this.navegarParaLista(),
      error: (erro) => console.error('Erro ao criar pensamento:', erro)
    });
  }

  cancelar(): void {
    this.navegarParaLista();
  }

  private navegarParaLista(): void {
    this.router.navigate(['/mural']);
  }
}