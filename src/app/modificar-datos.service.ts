import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModificarDatosService {

  constructor() { }


  agregarEdadYExperiencia(persona: any): any {
    persona.edad = 33;
    persona.experiencia = '5 años';
    return persona;
  }

}
