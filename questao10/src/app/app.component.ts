import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'questao10';

  usuarioAtivo: boolean | null = null;

  constructor(private http: HttpClient) {}

  verificarStatusUsuario() {
    this.http.post<{usuarioAtivo: boolean}>('usuario/ativo', {})
      .subscribe({
        next: (response) => {
          this.usuarioAtivo = response.usuarioAtivo;
        },
        error: (err) => {
          console.error('Erro ao verificar status do usuário:', err);
          this.usuarioAtivo = null;
        }
      });
  }
}
