import { Component, OnInit } from '@angular/core';
import { ModificarDatosService } from './modificar-datos.service';
import { ApiService } from './api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  persona = {
    nombre: 'Sergie',
    apellido: 'Code'
  };

  constructor(
    private _modificarDatos: ModificarDatosService,
    private _api: ApiService,
    private toastr: ToastrService
  ) { }
  ngOnInit(): void {
    debugger
    console.log(this.persona)
    this.persona = this._modificarDatos.agregarEdadYExperiencia(this.persona)
    console.log(this.persona)
    this._api.get('programas').subscribe({
      next: (res: any) => {
        console.log(res)
      },
      error: (error: any) => {
        this.toastr.error(error.error.detail, 'ERROR!');
        console.log(error)
      }
    })
    this._api.simularError().subscribe({
      next: (res: any) => console.log(res),
      error: (error: any)=> {
        if (error instanceof HttpErrorResponse) {
          this.toastr.error(error.error, 'ERROR!');
          console.error('Error status:', error.status);
          console.error('Error message:', error.error);
        }
      }
    })
  }

  secondFunction() {
    console.log('Segunda Función')
  }

  funcionBoton() {
    debugger
    console.log('Funcion del botón')
    this.secondFunction()
  }

  title = 'debugging-proyect';


}
