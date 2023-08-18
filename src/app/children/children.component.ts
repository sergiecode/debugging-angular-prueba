import { Component } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent {
  valor: boolean = true

  funcionBoton() {
    this.valor = !this.valor
  }

}
