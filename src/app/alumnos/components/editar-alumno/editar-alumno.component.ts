import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit {

  formulario!:FormGroup

  constructor(
    private router:Router,
    private alumnoService:AlumnosService,
    private activatedRoute: ActivatedRoute
  ){

  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros)=>{
      this.formulario = new FormGroup({
        id: new FormControl(parametros.get('id')),
        nombre: new FormControl(parametros.get('nombre')),
        apellido: new FormControl(parametros.get('apellido')),
        inscripcionAbierta: new FormControl(parametros.get('inscripcionAbierta' || false)),
        edad: new FormControl(parametros.get('edad')),
        sexo: new FormControl(parametros.get('sexo')),
        validado: new FormControl(parametros.get('validado' || false)),
      })
    })
  }


  editandoAlumno(){
    let alumno: Alumno ={
      id:this.formulario.value.id,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      edad: this.formulario.value.edad,
      sexo: this.formulario.value.sexo,
      validado: this.formulario.value.validado
    }
    this.alumnoService.editarAlumno(alumno)
    this.router.navigate(['alumnos/listar'])
  }

  

}
