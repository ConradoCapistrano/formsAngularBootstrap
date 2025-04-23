export interface Formulario {
  id?: number
  pensamentoTexto: string
  autor: string
  modelo: number
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}