import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Movie } from 'src/app/interface/peliculas.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  listapeliculas: Movie[] = [];


  
    // this.PeliculasSvc.getPeliculas().subscribe(res => {
    //   console.log(res);
    // });
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


    
  constructor(private PeliculasSvc: PeliculasService, private router: Router) {
    this.PeliculasSvc.listapeliculas().subscribe(res => {
      this.listapeliculas = res
    });


    this.contador = 2;
    this.imagen = `${this.ruta}${this.contador}${this.formato}`;

    let interval = setInterval(() => {
      this.contador++;
      // console.log(this.imagen);
      // console.log(this.contador);

      if (this.contador === 11) {
        this.contador = 1;
      }
      this.imagen = `${this.ruta}${this.contador}${this.formato}`;
    }, 3000)
  }

  verpelicula(id: number) {
    this.router.navigate
      (['/pelicula', id]);
  }



  
}
