import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { cursos } from 'src/app/core/services/cursos.data';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from '../../services/alumnos.service';
import { agregarAlumnoState } from '../../state/alumnos-state.actions';
import { AlumnoState } from '../../state/alumnos-state.reducer';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit {
  formulario!: FormGroup;

    constructor(
      private alumnoService: AlumnosService,
      private activatedRoute: ActivatedRoute,
      private router:Router,
      private store: Store<AlumnoState>

    ){}



  agregandoAlumno(){

    let alumno : Alumno = {
      id:'',
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      edad: this.formulario.value.edad,
      sexo: this.formulario.value.sexo,
      validado: this.formulario.value.validado,
      comision:this.formulario.value.comision
    }

      if(this.formulario.status=='VALID'){
      this.store.dispatch(agregarAlumnoState({alumno:alumno}))
      } else {
        alert('Los campos maracados en rojo son obligatorios')
      }
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params)=>{
      this.formulario = new FormGroup({
      nombre: new FormControl('',Validators.required),
      apellido: new FormControl('',Validators.required),
      edad:new FormControl('',Validators.required),
      sexo: new FormControl('',Validators.required),
      validado: new FormControl(''),
      comision: new FormControl('')
      })
    })
  }
}
