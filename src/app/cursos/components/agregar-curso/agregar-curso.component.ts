import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { Profesor } from 'src/app/models/profesor';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit {
  formulario!:FormGroup;
  profesores:Profesor[] = [
    {nombre:'Abner',
    correo:'Abner@gmail.com',
    fechaRegistro: new Date(),
    },
    {nombre:'Caro',
    correo:'Caro@gmail.com',
    fechaRegistro: new Date(),
  },
    {nombre:'Sebas',
    correo:'Sebas@gmail.com',
    fechaRegistro: new Date(),
  },

  ];

  constructor(
    private cursosService : CursosService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ){}
  
  
 
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros)=>{
      this.formulario = new FormGroup({
        nombre: new FormControl(''),
        comision: new FormControl(''),
        fechaInicio: new FormControl(''),
        fechaFin: new FormControl(''),
        inscripcionAbierta: new FormControl(false),
        profesor: new FormControl(),
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
      profesor:this.formulario.value.profesor
    }

    this.cursosService.agregarCurso(curso).subscribe((curso: Curso) => {
      alert(`${curso.nombre} agregado satisfactoriamente`);
      this.router.navigate(['cursos/listar']);
    });
  }


}