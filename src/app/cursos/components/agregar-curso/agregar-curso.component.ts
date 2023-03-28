import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Curso } from 'src/app/models/curso';
import { CursosService } from '../../services/cursos.service';
import { agregarCursoState } from '../../state/curso-state.actions';
import { CursoState } from '../../state/curso-state.reducer';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit{
  formulario!:FormGroup;


  constructor(
    private cursosService : CursosService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private store: Store<CursoState>
  ){}


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros)=>{
      this.formulario = new FormGroup({
        nombre: new FormControl('',Validators.required),
        comision: new FormControl('',Validators.required),
        fechaInicio: new FormControl('',Validators.required),
        fechaFin: new FormControl('',Validators.required),
        inscripcionAbierta: new FormControl(false),
      })
    })
  }

  agregandoCurso(){
    let curso : Curso = {
      id: '',
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      profesor:{
        nombre:'Abner',
        correo:'abner@gmail.com',
        fechaRegistro: new Date()
      }}
      console.log(curso)
    if(this.formulario.status=='VALID'){
        this.store.dispatch(agregarCursoState({curso:curso}))
    } else {
      alert('Los campos maracados en rojo son obligatorios')
    }}

}

