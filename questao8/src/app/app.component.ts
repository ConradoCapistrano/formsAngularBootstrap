import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'questao8';

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(35)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      dataNascimento: ['', [Validators.required]]
    })
  }

  get nome(): FormControl {
    return this.form.get('nome') as FormControl;
  }
  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }
  get telefone(): FormControl {
    return this.form.get('telefone') as FormControl;
  }
  get dataNascimento(): FormControl {
    return this.form.get('dataNascimento') as FormControl;
  }
  onSubmit() {
    if(this.form.valid) {
      console.log(this.form.value);
      alert('Formulario enviado!')
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
