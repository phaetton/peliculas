import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
 
  ruta: string = "../assets/series/bluey/bluey (";
  formato: string = ").jpg";
  contador: number = 1;
  imagen: string = "";
  //clasificaciones
  /**
    *   G: todo
    *  PG: con supervision de padres
    *  PG13: con supervision de padres para menores de 13
    *  NC16: mayores de 16
    *  M18: Mayores de 18
    */

  constructor() {
    this.contador = 2;
    this.imagen = `${this.ruta}${this.contador}${this.formato}`;

    let interval = setInterval(() => {
      this.contador++;
      console.log(this.imagen);
      console.log(this.contador);

      if (this.contador === 11) {
        this.contador = 1;
      }
      this.imagen = `${this.ruta}${this.contador}${this.formato}`;
    }, 3000)
  }

}
