import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  title = 'AngularBarbato';
  constructor(
    private router: Router
  ){

  }

  redirigirInicio(){
    this.router.navigate([''])

  }

  redirigirCursos(){
    this.router.navigate(['cursos'])
  }

  redirigirAlumnos(){
    this.router.navigate(['alumnos'])
  }
}
