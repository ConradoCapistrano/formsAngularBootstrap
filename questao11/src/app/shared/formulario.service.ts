import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formulario, ApiResponse } from '../pages/formulario/formulario';
import { Observable, catchError, throwError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private readonly API = 'https://localhost:7105/api/pensamentos'

  constructor(private http: HttpClient) { }

  listar(): Observable<Formulario[]> {
    return this.http.get<any>(this.API).pipe(
      map(response => {
        if (Array.isArray(response)) {
          return response;
        }
        else if (response && Array.isArray(response.data)) {
          return response.data;
        }
        return [];
      }),
      catchError(this.handleError)
    );
  }
  criar(formulario: Formulario): Observable<Formulario> {
    return this.http.post<Formulario>(this.API, formulario)
  }
  editar(formulario: Formulario): Observable<Formulario> {
    return this.http.put<Formulario>(this.API, formulario).pipe(
      catchError(this.handleError)
    );
  }
  excluir(id: number): Observable<Formulario> {
    const url = `${this.API}/${id}`
    return this.http.delete<Formulario>(url)
  }
  obterPorId(id: number): Observable<ApiResponse<Formulario>> {
    return this.http.get<ApiResponse<Formulario>>(`${this.API}/${id}`);
  }
  private handleError(error: any): Observable<never> {
    console.error('Erro na API', error);
    return throwError(() => new Error('Algo deu errado. Tente novamente.'));
  }
}