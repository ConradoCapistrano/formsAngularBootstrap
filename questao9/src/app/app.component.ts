import { Component, OnInit, computed, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface Estado {
  sigla: string;
  nome: string;
  cidades: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'questao9';

  form: FormGroup;

  estadosDisponiveis: Estado[] = [
    { sigla: 'PE', nome: 'Pernambuco', cidades: ['Recife', 'Olinda', 'Jaboatão', 'Vitória'] }
  ];

  cidadesDisponiveis = signal<string[]>([]);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(35)]],
      email: ['', [Validators.required, Validators.email]],
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
      instituicao: ['', Validators.required],
    });
  }
  
  ngOnInit(): void {
    // Primeiro carregamos as cidades para o estado padrão
    this.carregarCidadesParaEstado('Pernambuco');

    // Depois configuramos o effect para futuras mudanças
    effect(() => {
      const estadoSelecionado = this.estado.value;
      this.carregarCidadesParaEstado(estadoSelecionado);
    });

    // Definimos o valor padrão após configurar tudo
    this.form.patchValue({
      estado: 'Pernambuco'
    });
  }

  private carregarCidadesParaEstado(estadoNome: string): void {
    const estadoEncontrado = this.estadosDisponiveis.find(e => e.nome === estadoNome);
    if (estadoEncontrado) {
      this.cidadesDisponiveis.set(estadoEncontrado.cidades);
      // Se estamos definindo o estado inicial, também definimos a primeira cidade como padrão
      if (this.estado.value === estadoNome && estadoEncontrado.cidades.length > 0) {
        this.form.patchValue({
          cidade: estadoEncontrado.cidades[0]
        });
      }
    } else {
      this.cidadesDisponiveis.set([]);
    }
  }

  get nome(): FormControl {
    return this.form.get('nome') as FormControl;
  }
  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }
  get estado(): FormControl {
    return this.form.get('estado') as FormControl;
  }
  get cidade(): FormControl {
    return this.form.get('cidade') as FormControl;
  }
  get instituicao(): FormControl {
    return this.form.get('instituicao') as FormControl;
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      alert('Formulário enviado!');
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }
}