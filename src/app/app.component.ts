import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ruta:string="../assets/series/bluey/img/bluey (";
  formato:string=").jpg";
  contador: number = 1;
  imagen:string="";
  // constructor(){

  //  

  //   setTimeout(() => {
  //     this.numero ++;
  //     console.log("numero", this.numero);
  //     console.log("this.imagen",this.imagen);

  //   }, 3000);
  // }

  constructor() {
    this.contador = 2;
    this.imagen=`${this.ruta}${this.contador}${this.formato}`;

  }
  ngOnInit(): void {

    let interval = setInterval(() => {
      this.contador++;
      console.log(this.imagen);
      console.log(this.contador);
      
      if (this.contador === 11) {
        this.contador=1;
      }
      this.imagen=`${this.ruta}${this.contador}${this.formato}`;
    }, 3000)


  }


}
