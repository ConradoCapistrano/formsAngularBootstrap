import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formulario } from '../pages/formulario/formulario';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar(): Observable<Formulario[]> {
    return this.http.get<Formulario[]>(this.API).pipe(
      catchError(this.handleError)
    );
  }
  criar(formulario: Formulario): Observable<Formulario> {
    return this.http.post<Formulario>(this.API, formulario)
  }
  editar(formulario: Formulario): Observable<Formulario> {
    const url = `${this.API}/${formulario.id}`
    return this.http.put<Formulario>(url, formulario )
  }
  excluir(id: number): Observable<Formulario> {
    const url = `${this.API}/${id}`
    return this.http.delete<Formulario>(url)
  }
  obterPorId(id: number): Observable<Formulario> {
    const url = `${this.API}/${id}`
    return this.http.get<Formulario>(url)
  }
  private handleError(error: any): Observable<never> {
    console.error('Erro na API', error);
    return throwError(() => new Error('Algo deu errado. Tente novamente.'));
  }
}