import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Movie } from 'src/app/interface/peliculas.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listapeliculas: Movie[] = [];

  listaFiltrada: Movie[] = [];

  generos: any[] = [
    {
      "id": 28,
      "name": "Acción"
    },
    {
      "id": 12,
      "name": "Aventura"
    },
    {
      "id": 16,
      "name": "Animación"
    },
    {
      "id": 35,
      "name": "Comedia"
    },
    {
      "id": 80,
      "name": "Crimen"
    },
    {
      "id": 99,
      "name": "Documental"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Familia"
    },
    {
      "id": 14,
      "name": "Fantasía"
    },
    {
      "id": 36,
      "name": "Historia"
    },
    {
      "id": 27,
      "name": "Terror"
    },
    {
      "id": 10402,
      "name": "Música"
    },
    {
      "id": 9648,
      "name": "Misterio"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Ciencia ficción"
    },
    {
      "id": 10770,
      "name": "Película de TV"
    },
    {
      "id": 53,
      "name": "Suspense"
    },
    {
      "id": 10752,
      "name": "Bélica"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

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
      this.ordenarId();

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

  ngOnInit(): void {
  }

  verpelicula(id: number) {
    this.router.navigate
      (['/pelicula', id]);
  }

  ordenarId() {
    this.listaFiltrada = this.listapeliculas.sort((a, b) => Date.parse(a.release_date) - Date.parse(b.release_date))
  }


  agruparGenero(id: number) {

    this.listaFiltrada = this.listapeliculas.filter(a => a.genre_ids.includes(id));
    // (a, b) => Date.parse(a.release_date) - Date.parse(b.release_date))

  }


  filtrarpalabra(event: any) {
    let valor = event.value.toUpperCase();
    this.listaFiltrada = this.listapeliculas.filter(a =>
      a.title.toUpperCase().includes(valor)

    );

  }

}
