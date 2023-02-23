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

  agregarAlumno(){
    let nuevoalumno : Alumno = {
      nombre: 'Alejo',
      apellido: 'Splett',
      inscripcionAbierta:true,
      edad:27,
      sexo:'no',
      validado:true
    }
    this.alumnoService.agregarAlumno(nuevoalumno)

  }

  agregarCurso(){
    let nuevoCurso : Curso = {
      nombre:'Angular',
      comision:'614213',
      profesor:{
      nombre:'Abner',
      correo:"asdas@gmail.com",
      fechaRegistro: new Date(2022,7,14)},
      inscripcionAbierta:true,
      fechaInicio: new Date(2023, 0,31),
      fechaFin: new Date(2023,2,28)
    }

    this.cursoService.agregarCurso(nuevoCurso)
  }

}
