import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map, Observable, Subscription } from 'rxjs';
import { AuthState } from 'src/app/auth/state/auth.reducer';
import { selectSesionAll, selectUsuarioAdmin } from 'src/app/auth/state/auth.selectors';
import { cargarCursoState, cursosCargados } from 'src/app/cursos/state/curso-state.actions';
import { CursoState } from 'src/app/cursos/state/curso-state.reducer';
import { selectorCursosCargados } from 'src/app/cursos/state/curso-state.selectors';
import { Alumno } from 'src/app/models/alumno';
import { Curso } from 'src/app/models/curso';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';
import { AlumnosService } from '../../services/alumnos.service';
import { editarAlumnoState, eliminarAlumnoState } from '../../state/alumnos-state.actions';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  formulario!:FormGroup
  cursos$!:Observable<Curso[]>;
  subcription!:Subscription;
  columnas : string[] = ['nombre', 'comision' , 'profesor', 'inscripcionAbierta', 'fechaInicio', 'fechaFin','actions'];
  dataSource!: MatTableDataSource<Curso>
  usuarioAdmin$!:Observable<boolean|undefined>
  snackBar: any;


  constructor(
    private alumnoService : AlumnosService,
    private router : Router,
    private activatedRoute:ActivatedRoute,
    private storeCursos:Store<CursoState>,
    private store: Store<AuthState>,

  ){}

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((parametros)=>{
      this.formulario = new FormGroup({
        id: new FormControl(parametros.get('id'),Validators.required),
        nombre: new FormControl(parametros.get('nombre'),Validators.required),
        apellido: new FormControl(parametros.get('apellido'),Validators.required),
        edad: new FormControl(parametros.get('edad'),Validators.required),
        sexo: new FormControl(parametros.get('sexo'),Validators.required),
        validado: new FormControl(parametros.get('validado')),
        comision: new FormControl(parametros.get('comision'), Validators.required)
      })

      this.usuarioAdmin$ =  this.store.select(selectUsuarioAdmin)

      this.store.dispatch(cargarCursoState());
      this.cursos$ = this.storeCursos.select(selectorCursosCargados).pipe(map((cursos:Curso[])=>{
        let cursosFiltrados = cursos.filter((curso:Curso)=> curso.comision == parametros.get('comision') )
        if(cursosFiltrados.length>0){
          return cursosFiltrados
        }else{
          return []
        }

    }))
      this.cursos$.subscribe((cursos)=>{
        if(cursos.length>0){
          this.dataSource = new MatTableDataSource<Curso>();
          return this.dataSource.data = cursos
        }else{
          return false
        }
      })
    })

    this.store.select(selectSesionAll).subscribe((sesion:Sesion)=>{
      // if(!sesion.sesionActiva){
      //   this.router.navigate(['auth/login'])
      // }
    })
  }

  volverListado(){
    this.router.navigate(['alumnos/listar'])
  }

  editandoAlumno(){
    let alumno: Alumno ={
      id:this.formulario.value.id,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      edad: this.formulario.value.edad,
      sexo: this.formulario.value.sexo,
      validado: this.formulario.value.validado,
      comision:''
    }

    if(this.formulario.status=="VALID"){
      this.store.dispatch(editarAlumnoState({alumno:alumno}))
      setTimeout(()=>this.router.navigate(['alumnos/listar']),1000)
    } else {
      alert('Los campos maracados en rojo son obligatorios')
    }}



}
