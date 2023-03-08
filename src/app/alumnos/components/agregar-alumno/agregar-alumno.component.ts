import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { cursos } from 'src/app/core/services/cursos.data';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit, OnDestroy {
  formulario!: FormGroup;

    constructor(
      private alumnoService: AlumnosService,
      private activatedRoute: ActivatedRoute,
      private router:Router
    ){}


  agregandoAlumno(){
    let alumno : Alumno = {
      id:'',
      index: this.formulario.value.id,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      edad: this.formulario.value.edad,
      sexo: this.formulario.value.sexo,
      validado: this.formulario.value.validado,
    }
    this.alumnoService.agregarAlumno(alumno).subscribe((alumno:Alumno)=>{
      alert(`${alumno.nombre} agregado satisfactoriamente`)
      this.router.navigate(['alumnos/listar'])
    });
    
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params)=>{
      this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      inscripcionAbierta: new FormControl(false),
      edad:new FormControl(''),
      sexo: new FormControl(''),
      validado: new FormControl(false),
      })
    })
  }

  ngOnDestroy(): void {
    
  }

}
