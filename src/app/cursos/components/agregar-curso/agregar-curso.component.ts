import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { Profesor } from 'src/app/models/profesor';
import { ProfesoresService } from 'src/app/profesores/profesores.service';
import { CursosService } from '../../services/cursos.service';
import { agregarCursoState } from '../../state/curso-state.actions';
import { CursoState } from '../../state/curso-state.reducer';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit , OnDestroy{
  formulario!:FormGroup;
  profesores$!:Observable<Profesor[]>
  subscripcion!:Subscription
  profesores!:Profesor[]
  // profesores: Profesor[] = [
  //   {
  //    "nombre": "Abner Angular JS",
  //    "correo": "abner@gmail.com",
  //    "fechaRegistro":new Date()
  //   },
  //   {
  //    "nombre": "Caro ReactJS",
  //    "correo": "caro@gmail.com",
  //    "fechaRegistro":new Date()
  //   },
  //  ]

  constructor(
    private cursosService : CursosService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private store: Store<CursoState>,
    private profesoresService: ProfesoresService
  ){}


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros)=>{
      this.formulario = new FormGroup({
        nombre: new FormControl('',Validators.required),
        comision: new FormControl('',Validators.required),
        fechaInicio: new FormControl('',Validators.required),
        fechaFin: new FormControl('',Validators.required),
        inscripcionAbierta: new FormControl(false),
        profesor: new FormControl()
      })
    })

    this.profesores$ = this.profesoresService.getProfesores()
    this.subscripcion =this.profesores$.subscribe((profesores)=>{
      this.profesores = profesores
    });

  }

  ngOnDestroy(): void {
    if(this.subscripcion){
      this.subscripcion.unsubscribe()
    }
  }

  agregandoCurso(){
    let curso : Curso = {
      id: '',
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      profesor:this.formulario.value.profesor
    }
      console.log(curso)
    if(this.formulario.status=='VALID'){
        this.store.dispatch(agregarCursoState({curso:curso}))
    } else {
      alert('Los campos maracados en rojo son obligatorios')
    }}

}

