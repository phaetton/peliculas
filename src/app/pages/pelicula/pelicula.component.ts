import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interface/peliculas.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent {
  pelicula: any;
  reproducir: boolean = false;

  @ViewChild('videoPlayer')
  videoPlayer: any;
  duracion!: string;
  progreso: number = 0;
  posicion: string = '';

  videoInfo =
    {
      'titulo': 'Buza caperuza',
      'descripcion': 'descripcion de la pelicula',
      'duracion': 100,
      'progreso': 35,
      'posicion': 25
    }

    ;
  id!: string;

  constructor(private PeliculasSvc: PeliculasService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      async (params) => {
        this.PeliculasSvc.getPeliculaPorId(params['id']).subscribe(res => {
          this.pelicula = res;
        });
      }
    );
  }

  reproducirVideo(): void {
    this.videoPlayer.nativeElement.play();
    this.reproducir = true;
  }


  adelantar100(): void {
    this.videoPlayer.nativeElement.currentTime += 100;
  }

  adelantar600(): void {
    this.videoPlayer.nativeElement.currentTime += 600;
  }



  atrasar100(): void {
    this.videoPlayer.nativeElement.currentTime -= 100;
  }
  
  atrasar600(): void {
    this.videoPlayer.nativeElement.currentTime -= 600;
  }

  pantallaCompleta() {
    this.videoPlayer.nativeElement.requestFullscreen();
  }

  pantallaRestaurada() {

  }


  detenerVideo(): void {
    this.videoPlayer.nativeElement.pause();
    this.videoPlayer.nativeElement.currentTime = 0;
    this.reproducir = false;

  }

  pausarVideo(): void {
    this.videoPlayer.nativeElement.pause();
    this.reproducir = false;
  }

  onMetadata(e: any, video: any): void {


    let hour:any = Math.floor(video.duration / 3600);
    hour = (hour < 10)? '0' + hour : hour;
    let minute :any= Math.floor((video.duration / 60) % 60);
    minute = (minute < 10)? '0' + minute : minute;
    let second:any = video.duration % 60;
    second = (second < 10)? '0' + second : second;
    this.duracion = hour + ':' + minute + ':' + parseInt(second);

    // const minutos = Math.floor(video.duration / 60);
    // const segundos = Math.floor(video.duration);
    // this.duracion = minutos + ':' + segundos;
  }


  // function secondsToString(seconds) {
  //   var hour = Math.floor(seconds / 3600);
  //   hour = (hour < 10)? '0' + hour : hour;
  //   var minute = Math.floor((seconds / 60) % 60);
  //   minute = (minute < 10)? '0' + minute : minute;
  //   var second = seconds % 60;
  //   second = (second < 10)? '0' + second : second;
  //   return hour + ':' + minute + ':' + second;
  // }

  onTimeUpdate(e: any, video: any): void {
    this.progreso = Math.floor((video.currentTime / video.duration) * 100);
    // const minutos = Math.floor(video.currentTime / 60);
    // const segundos = Math.floor(video.currentTime);
    // this.posicion = minutos + ':' + segundos;


    let hour:any = Math.floor(video.currentTime / 3600);
    hour = (hour < 10)? '0' + hour : hour;
    let minute :any= Math.floor((video.currentTime / 60) % 60);
    minute = (minute < 10)? '0' + minute : minute;
    let second:any = video.currentTime % 60;
    second = (second < 10)? '0' + second : second;
    this.posicion = hour + ':' + minute + ':' +  parseInt(second);
  }






  // window.isMuted = true;

  // const toggleFullScreen = async () => {
  //   const container = document.getElementById('video-chat-container');
  //   const fullscreenApi = container.requestFullscreen
  //     || container.webkitRequestFullScreen
  //     || container.mozRequestFullScreen
  //     || container.msRequestFullscreen;
  //   if (!document.fullscreenElement) {
  //     fullscreenApi.call(container);
  //   }
  //   else {
  //     document.exitFullscreen();
  //   }
  // };

  // const toggleMute = (evt) => {
  //   const btn = document.getElementById('mute-btn-icon');
  //   const video = document.getElementById('video-player');
  //   video.muted = !video.muted;
  //   if (video.muted) {
  //     btn.classList.remove('bi-volume-mute');
  //     btn.classList.add('bi-volume-down-fill');
  //   }
  //   else {
  //     btn.classList.add('bi-volume-mute');
  //     btn.classList.remove('bi-volume-down-fill');
  //   }
  // };

  // const togglePlayback = (evt) => {
  //   const btn = document.getElementById('play-btn-icon');
  //   const video = document.getElementById('video-player');
  //   if (video.paused) {
  //     video.play();
  //     btn.classList.remove('bi-play');
  //     btn.classList.add('bi-pause');
  //   }
  //   else {
  //     video.pause();
  //     btn.classList.add('bi-play');
  //     btn.classList.remove('bi-pause');
  //   }
  // };




}
