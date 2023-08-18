import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://www.cultura.gob.ar/api/v2.0/'; // Reemplaza esto con la URL real de tu API

  constructor(private http: HttpClient) { }

  // Método para hacer una solicitud GET a la API
  get(endpoint: string): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get(url);
  }

  simularError(): Observable<any> {
    const mensajeError = 'Ocurrió un error en la solicitud.';
    const errorResponse = new HttpErrorResponse({
      error: mensajeError,
      status: 500, // Código de estado HTTP que deseas asignar al error
      statusText: 'Error interno del servidor' // Texto asociado al código de estado
    });

    return throwError(() => errorResponse);

  }
}
