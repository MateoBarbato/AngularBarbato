import { Component } from '@angular/core';
import { AlumnosService } from 'src/app/alumnos/services/alumnos.service';
import { CursosService } from 'src/app/cursos/services/cursos.service';
import { Alumno } from 'src/app/models/alumno';
import { Curso } from 'src/app/models/curso';


@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent {


  constructor(
   private alumnoService:AlumnosService,
   private cursoService : CursosService
  ){

  }

}
