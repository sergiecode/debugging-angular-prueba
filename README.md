# Prueba de manejo de Errores en Angular

Los pasos para implementar el manejo de errores en Angular al utilizar un servicio para realizar solicitudes HTTP a una API externa. Manejando y mostrar errores tanto a nivel del servicio como en los componentes que consumen el servicio.

## Paso 1: Crear el Servicio de API

1.  Crea un nuevo servicio llamado `ApiService` utilizando el comando `ng generate service api`. Esto generará un archivo `api.service.ts`.
    
2.  Dentro de `api.service.ts`, importa las dependencias necesarias:
    

```

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
```

3.  Crea el servicio y define la URL base de la API:

```
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://www.cultura.gob.ar/api/v2.0/'; 

  constructor(private http: HttpClient) { }
  ```

4.  Agrega el método `get()` para realizar solicitudes HTTP GET:

```
get(endpoint: string): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get(url).pipe(
      catchError((error) => {
        console.error('Error en la solicitud:', error);
        return throwError(error);
      })
    );
  }
```

5.  Agrega un método `simularError()` para generar un error simulado:

```
simularError(): Observable<any> {
    const mensajeError = 'Ocurrió un error en la solicitud.';
    const errorResponse = new HttpErrorResponse({
      error: mensajeError,
      status: 500,
      statusText: 'Error interno del servidor'
    });

    return throwError(() => errorResponse);
  }
```

## Paso 2: Implementar el Manejo de Errores en un Componente

1.  Crea un nuevo componente utilizando el comando `ng generate component data`. Esto generará un archivo `data.component.ts`.
    
2.  En `data.component.ts`, importa el servicio `ApiService` y RxJS:
    
```
import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { catchError } from 'rxjs/operators';
```

3.  En el constructor del componente, inyecta el servicio `ApiService`:

```
@Component({
  selector: 'app-data',
  template: `
    <button (click)="getData()">Obtener Datos</button>
  `
})
export class DataComponent {
  constructor(private apiService: ApiService) {}
```

4.  Agrega el método `getData()` para hacer una solicitud y manejar errores:


```
getData() {
    this.apiService.get('some-endpoint').pipe(
      catchError((error) => {
        console.error('Ocurrió un error:', error);
        return [];
      })
    ).subscribe((data) => {
      console.log('Datos recibidos:', data);
    });
  }
}
```
