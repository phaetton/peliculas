import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  formulario: FormGroup;
  get f() { return this.formulario.controls; }

  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.formulario = this.formBuilder.group({
      textoabuscar: ['', Validators.required],
    });

  }

  onsubmit() {
    console.log(this.f['textoabuscar'].value);
    this.router.navigate(
      ['/pelicula/', this.f['textoabuscar'].value],
    );
  }
}
