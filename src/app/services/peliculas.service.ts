import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Lista, Movie, PeliculasResponse, busquedaPeli } from '../interface/peliculas.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private serverURL = 'https://api.themoviedb.org/3/';
  private language = 'es-MX';
  private peliculaPage = '1';


  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTg2Mjc2NDI4ZjQwY2IxMTdjMjY2YzJjMzE3OGVmYSIsInN1YiI6IjY1OGVmYTlkMGQyZjUzNWRkMGQzYmU1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MaRTC18-txUZiVu-n8TaRsOGuIbgFqCARd2-RTv2VJg'
    },
  };




  constructor(private http: HttpClient) { }


  getPeliculas() {
    return this.http.get(`${this.serverURL}movie/now_playing`, this.options)
  }


  searchPeliculaAdmin(palabra: string): Observable<Movie[]> {
    return this.http.get<PeliculasResponse>(`${this.serverURL}search/movie?query=${palabra}&language=${this.language}&include_adult=false`, this.options)
      .pipe(map((res) => res.results))
  }

  // listapeliculas(): Observable<Movie[]> {
  //   return this.http.get<PeliculasResponse>(`${this.serverURL}account/20874402/lists`, this.options)
  //     .pipe(map((res) => res.results))
  // }

  getPeliculaPorId(id: number): Observable<Movie> {
    return this.http.get<Movie>(`https://api.themoviedb.org/3/movie/${id}?language=${this.language}`, this.options)
      .pipe(map((res) => res))
  }



  listapeliculas(): Observable<Movie[]> {
    return this.http.get<Lista>(`https://api.themoviedb.org/3/list/8285865?language=${this.language}&page=1`, this.options)
      .pipe(map((res) => res['items']))
  }

}

