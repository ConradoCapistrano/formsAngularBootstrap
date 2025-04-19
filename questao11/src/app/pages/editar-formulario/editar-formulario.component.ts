import { ActivatedRoute, Router } from '@angular/router';
import { Formulario } from '../formulario/formulario';
import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../../shared/formulario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SubTituloFormularioComponent } from '../../shared/sub-titulo-formulario/sub-titulo-formulario.component';
import { BotaoFormularioComponent } from '../../shared/botao-formulario/botao-formulario.component';

@Component({
  selector: 'app-editar-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule, SubTituloFormularioComponent, BotaoFormularioComponent],
  templateUrl: './editar-formulario.component.html',
  styleUrl: './editar-formulario.component.css'
})
export class EditarFormularioComponent implements OnInit {

  formulario: Formulario = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  estiloBotao = 'botao btn text-light';

  constructor(
    private service: FormularioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.obterPorId(parseInt(id!)).subscribe((formulario) => {
      this.formulario = formulario
    })
  }

  editarFormulario() {
    this.service.editar(this.formulario).subscribe(() => {
      this.router.navigate(['/mural'])
    })

  }
  cancelar() {
    this.router.navigate(['/mural'])
  }
}
