import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Curso } from 'src/app/models/curso';
import {CursosService} from '../../services/cursos.service'
import { editarCurso } from '../../state/curso-state.actions';
import { CursoState } from '../../state/curso-state.reducer';
@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit{
  formulario!:FormGroup;


  constructor(
    private cursosService : CursosService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private store:Store<CursoState>,
    private snackBar: MatSnackBar
  ){}


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros)=>{
      this.formulario = new FormGroup({
        id: new FormControl(parametros.get('id'),Validators.required),
        nombre: new FormControl(parametros.get('nombre'),Validators.required),
        comision: new FormControl(parametros.get('comision'),Validators.required),
        fechaInicio: new FormControl(new Date(parametros.get('fechaInicio')||''),Validators.required),
        fechaFin: new FormControl(new Date(parametros.get('fechaFin')||''),Validators.required),
        inscripcionAbierta: new FormControl(parametros.get('inscripcionAbierta' || false)),
      })
    })
  }

  editandoCurso(){
    let curso : Curso = {
      id: this.formulario.value.id,
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      profesor:this.formulario.value.profesor
    }

    if(this.formulario.status=='VALID'){

      this.store.dispatch(editarCurso({curso:curso}))
      this.snackBar.open(`El curso: ${curso.nombre} fue editado satisfactoriamente`)
      setTimeout(()=>this.router.navigate(['cursos/listar']),1000)

    } else {
      alert('Los campos maracados en rojo son obligatorios')
    }}


}
