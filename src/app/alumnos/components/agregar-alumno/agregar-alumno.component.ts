import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
      index: this.formulario.value.id,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      edad: this.formulario.value.edad,
      sexo: this.formulario.value.sexo,
      validado: this.formulario.value.validado,
    }
    this.alumnoService.agregarAlumno(alumno);
    this.router.navigate(['alumnos/listar'])
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params)=>{
      this.formulario = new FormGroup({
      id: new FormControl(params.get('id')),
      nombre: new FormControl(params.get('nombre')),
      apellido: new FormControl(params.get('apellido')),
      inscripcionAbierta: new FormControl(params.get('inscripcionAbierta')),
      edad:new FormControl(params.get('edad')),
      sexo: new FormControl(params.get('sexo')),
      validado: new FormControl(params.get('validado')),
      })
    })
  }

  ngOnDestroy(): void {
    
  }

}
