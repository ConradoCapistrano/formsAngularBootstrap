import { Component, OnInit } from '@angular/core';
import { Formulario } from '../formulario/formulario';
import Swal from 'sweetalert2';
import { FormularioService } from '../../shared/formulario.service';
import { FormularioComponent } from "../formulario/formulario.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mural',
  standalone: true,
  imports: [FormularioComponent, FormsModule, CommonModule, RouterLink],
  templateUrl: './mural.component.html',
  styleUrl: './mural.component.css'
})
export class MuralComponent implements OnInit{
  mural: Formulario[] = [];

  constructor(private service: FormularioService) { }

  ngOnInit(): void {
    this.carregarPensamento();
  }

  carregarPensamento(): void {
    this.service.listar().subscribe({
      next: (response) => {
        console.log('Pensamentos carregados:', response);
        this.mural = response;
      },
      error: (error) => {
        console.error('Erro ao carregar pensamentos:', error);
        Swal.fire('Erro', 'Não foi possível carregar os pensamentos', 'error');
      }
    });
  }

  onCardExcluido(id: number) {
    Swal.fire({
      title: "Tem certeza?",
      text: "Você não poderá reverter esta ação!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, excluir!",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.excluir(id).subscribe({
          next: () => {
            Swal.fire({
              title: "Excluído!",
              text: "O pensamento foi excluído com sucesso.",
              icon: "success",
              confirmButtonColor: "#3085d6",
            });
            this.carregarPensamento();
          },
          error: (erro) => {
            Swal.fire({
              title: "Erro!",
              text: "Ocorreu um erro ao excluir o pensamento.",
              icon: "error",
              confirmButtonColor: "#d33",
            });
            console.error(erro);
          }
        });
      }
    });
  }
}