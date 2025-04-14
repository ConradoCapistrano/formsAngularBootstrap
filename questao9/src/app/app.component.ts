import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

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
export class AppComponent implements OnDestroy {
  title = 'questao9';

  form: FormGroup;

  estadosDisponiveis: Estado[] = [
    { sigla: 'PE', nome: 'Pernambuco', cidades: ['Recife', 'Olinda', 'Jaboatão', 'Vitória'] },
    { sigla: 'CE', nome: 'Ceara', cidades: ['Fortaleza', 'Acarape', 'Itapipoca', 'Sobral'] }
  ];

  cidadesDisponiveis: string[] = [];
  private estadoSubscription: Subscription;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(35)]],
      email: ['', [Validators.required, Validators.email]],
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
      instituicao: ['', Validators.required],
    });

    this.estadoSubscription = this.estado.valueChanges.subscribe(estadoSelecionado => {
      if (estadoSelecionado) {
        const estadoEncontrado = this.estadosDisponiveis.find(e => e.nome === estadoSelecionado);
        if (estadoEncontrado) {
          this.cidadesDisponiveis = estadoEncontrado.cidades;
          this.cidade.setValue('');
        }
      } else {
        this.cidadesDisponiveis = [];
        this.cidade.setValue('');
      }
    });
  }

  ngOnDestroy(): void {
    // Cancela a subscription para evitar memory leaks
    this.estadoSubscription.unsubscribe();
    // Reseta o formulário
    this.form.reset();
    // Limpa a lista de cidades
    this.cidadesDisponiveis = [];
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
      this.cidadesDisponiveis = [];
    } else {
      this.form.markAllAsTouched();
    }
  }
}