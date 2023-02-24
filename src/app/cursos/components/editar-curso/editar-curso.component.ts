import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import {CursosService} from '../../services/cursos.service'
@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {
  formulario!:FormGroup;

  constructor(
    private cursosService : CursosService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ){}

 
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros)=>{
      this.formulario = new FormGroup({
        nombre: new FormControl(parametros.get('nombre')),
        comision: new FormControl(parametros.get('comision')),
        fechaInicio: new FormControl(new Date(parametros.get('fechaInicio')||'')),
        fechaFin: new FormControl(new Date(parametros.get('fechaFin')||'')),
        inscripcionAbierta: new FormControl(parametros.get('inscripcionAbierta' || false)),
      })
    })
  }

  editandoCurso(){
    let curso : Curso = {
      nombre: this.formulario.value.nombre,
      comision: this.formulario.value.comision,
      fechaInicio: this.formulario.value.fechaInicio,
      fechaFin: this.formulario.value.fechaFin,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      profesor:{
        nombre:'Abner',
        correo:'abner@gmail.com',
        fechaRegistro: new Date()
      }
    }

    this.cursosService.editarCurso(curso);
    this.router.navigate(['cursos/listar'])
  }


}
