import { ActivatedRoute, Router } from '@angular/router';
import { Formulario } from '../formulario/formulario';
import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../../shared/formulario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SubTituloFormularioComponent } from '../../shared/sub-titulo-formulario/sub-titulo-formulario.component';
import { BotaoFormularioComponent } from '../../shared/botao-formulario/botao-formulario.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule, SubTituloFormularioComponent, BotaoFormularioComponent],
  templateUrl: './editar-formulario.component.html',
  styleUrls: ['./editar-formulario.component.css']
})
export class EditarFormularioComponent implements OnInit {
  formulario: Formulario = {
    id: 0,
    pensamentoTexto: '',
    autor: '',
    modelo: 1
  };

  estiloBotao = 'botao btn text-light';

  constructor(
    private service: FormularioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.carregarPensamento();
  }

carregarPensamento(): void {
  const id = this.route.snapshot.paramMap.get('id');
  if (!id || isNaN(+id)) {
    Swal.fire('Erro', 'ID do pensamento inválido', 'error');
    this.router.navigate(['/mural']);
    return;
  }

  this.service.obterPorId(+id).subscribe({
    next: (response) => {
      this.formulario = {
        id: response.data.id,
        pensamentoTexto: response.data.pensamentoTexto || '',
        autor: response.data.autor || '',
        modelo: response.data.modelo || 1
      };
    },
    error: (error) => {
      console.error('Erro ao carregar:', error);
      Swal.fire('Erro', error.message || 'Não foi possível carregar o pensamento', 'error');
      this.router.navigate(['/mural']);
    }
  });
}

editarFormulario(): void {
  if (!this.formulario.id) {
    Swal.fire('Erro', 'ID do pensamento inválido', 'error');
    return;
  }

  console.log('Dados antes de editar:', this.formulario);

  this.service.editar(this.formulario).subscribe({
    next: (response) => {
      console.log('Resposta da edição:', response);
      Swal.fire({
        title: 'Sucesso!',
        text: 'Pensamento atualizado com sucesso',
        icon: 'success'
      }).then(() => {
        this.router.navigate(['/mural']);
      });
    },
    error: (error) => {
      console.error('Erro completo:', error);
      Swal.fire({
        title: 'Erro na Edição',
        text: error.message || 'Detalhes do erro consulte o console',
        icon: 'error'
      });
    }
  });
}

  cancelar(): void {
    this.router.navigate(['/mural']);
  }
}