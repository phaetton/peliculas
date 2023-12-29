import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-listavideos',
  templateUrl: './listavideos.component.html',
  styleUrls: ['./listavideos.component.scss']
})
export class ListavideosComponent {
  rutagenerica:string="../assets"
 


  continuarviendo: any[] = [
    {
    nombre: "Bluey",
    anio: "2023",
    clasificacion: "G",
    descripcion: "La Serie Bluey está basada en la historia de una cachorrita que vive con mamá, papá y una hermana, pero también tiene muchos amigos, que también son perritos.",
    tipo:"series",
    generico: "bluey"
  },
  {
    nombre: "Hora de aventura",
    anio: "2020",
    clasificacion: "PG13",
    descripcion: "La Serie Bluey está basada en la historia de una cachorrita que vive con mamá, papá y una hermana, pero también tiene muchos amigos, que también son perritos.",
     tipo:"series",
    generico: "horadeaventura"
  },
  {
    nombre: "Bluey 3",
    anio: "2023",
    clasificacion: "G",
    descripcion: "La Serie Bluey está basada en la historia de una cachorrita que vive con mamá, papá y una hermana, pero también tiene muchos amigos, que también son perritos.",
     tipo:"series",
    generico: "bluey"
  },
  {
    nombre: "Bluey 4",
    anio: "2023",
    clasificacion: "G",
    descripcion: "La Serie Bluey está basada en la historia de una cachorrita que vive con mamá, papá y una hermana, pero también tiene muchos amigos, que también son perritos.",
     tipo:"series",
    generico: "bluey"
  },
  {
    nombre: "Bluey 4",
    anio: "2023",
    clasificacion: "G",
    descripcion: "La Serie Bluey está basada en la historia de una cachorrita que vive con mamá, papá y una hermana, pero también tiene muchos amigos, que también son perritos.",
     tipo:"series",
    generico: "bluey"
  }, {
    nombre: "Bluey 4",
    anio: "2023",
    clasificacion: "G",
    descripcion: "La Serie Bluey está basada en la historia de una cachorrita que vive con mamá, papá y una hermana, pero también tiene muchos amigos, que también son perritos.",
     tipo:"series",
    generico: "bluey"
  },
  {
    nombre: "Hora de aventura",
    anio: "2020",
    clasificacion: "PG13",
    descripcion: "La Serie Bluey está basada en la historia de una cachorrita que vive con mamá, papá y una hermana, pero también tiene muchos amigos, que también son perritos.",
     tipo:"series",
    generico: "horadeaventura"
  },
  {
    nombre: "Bluey 3",
    anio: "2023",
    clasificacion: "G",
    descripcion: "La Serie Bluey está basada en la historia de una cachorrita que vive con mamá, papá y una hermana, pero también tiene muchos amigos, que también son perritos.",
     tipo:"series",
    generico: "bluey"
  },
  {
    nombre: "Bluey 4",
    anio: "2023",
    clasificacion: "G",
    descripcion: "La Serie Bluey está basada en la historia de una cachorrita que vive con mamá, papá y una hermana, pero también tiene muchos amigos, que también son perritos.",
     tipo:"series",
    generico: "bluey"
  },
  {
    nombre: "Bluey 4",
    anio: "2023",
    clasificacion: "G",
    descripcion: "La Serie Bluey está basada en la historia de una cachorrita que vive con mamá, papá y una hermana, pero también tiene muchos amigos, que también son perritos.",
     tipo:"series",
    generico: "bluey"
  }, {
    nombre: "Bluey 4",
    anio: "2023",
    clasificacion: "G",
    descripcion: "La Serie Bluey está basada en la historia de una cachorrita que vive con mamá, papá y una hermana, pero también tiene muchos amigos, que también son perritos.",
     tipo:"series",
    generico: "bluey"
  }];
  // constructor(){

  //  

  //   setTimeout(() => {
  //     this.numero ++;
  //     console.log("numero", this.numero);
  //     console.log("this.imagen",this.imagen);

  //   }, 3000);
  // }


 


  @ViewChild('scrollingContent') scrollingContent!: ElementRef;

  scrollLeft() {
     this.scrollingContent.nativeElement.scrollLeft -= 800;
  }
 
  scrollRight() {
     this.scrollingContent.nativeElement.scrollLeft += 800;
  }
 
}
