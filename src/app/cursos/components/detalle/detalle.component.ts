import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { cargarAlumnoState, editarAlumnoState } from 'src/app/alumnos/state/alumnos-state.actions';
import { AlumnoState } from 'src/app/alumnos/state/alumnos-state.reducer';
import { selectAlumnosState, selectorAlumnosCargados } from 'src/app/alumnos/state/alumnos-state.selectors';
import { AuthState } from 'src/app/auth/state/auth.reducer';
import { selectSesionAll, selectUsuarioAdmin } from 'src/app/auth/state/auth.selectors';
import { Alumno } from 'src/app/models/alumno';
import { Curso } from 'src/app/models/curso';
import { Sesion } from 'src/app/models/sesion';
import { editarCurso } from '../../state/curso-state.actions';
import { CursoState } from '../../state/curso-state.reducer';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  formulario!:FormGroup;
  columnas : string[] = ['id','nombre', 'edad', 'sexo', 'validado', 'comision', 'actions']
  alumnos$!:Observable<Alumno[]>
  dataSource!:MatTableDataSource<Alumno>
  usuarioAdmin$!:Observable<boolean|undefined>

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private store:Store<CursoState>,
    private storeAuth: Store<AuthState>,
    private storeAlumnos:Store<AlumnoState>,
    private snackBar:MatSnackBar
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
      this.storeAlumnos.dispatch(cargarAlumnoState());
      this.alumnos$ = this.storeAlumnos.select(selectorAlumnosCargados).pipe(map((alumnos:Alumno[])=>{
      return alumnos.filter((alumno:Alumno)=> alumno.comision == parametros.get('comision') )
    }))

    this.usuarioAdmin$ = this.storeAuth.select(selectUsuarioAdmin)
    this.alumnos$.subscribe((alumnos)=>{
      if(alumnos.length>0){
        this.dataSource = new MatTableDataSource<Alumno>();
        console.log('Hubo cursos')
        return this.dataSource.data = alumnos
      }else{
        return false
      }
    })})

    this.formulario.disable()
    this.storeAuth.select(selectSesionAll).subscribe((sesion:Sesion)=>{
      if(!sesion.sesionActiva){
        this.router.navigate(['auth/login'])
      }
    })
  }

  volverListado(){
    this.router.navigate(['cursos/listar'])
  }

  editandoAlumno(alumno:Alumno){

    let alumnoEdited = {...alumno, comision:''}

    if(this.formulario.status=='VALID'){
      this.store.dispatch(editarAlumnoState({alumno:alumnoEdited}))
      this.snackBar.open(`El curso: ${alumno.nombre} fue editado satisfactoriamente`)
      setTimeout(()=>this.router.navigate(['cursos/listar']),1000)
    } else {
      alert('Los campos maracados en rojo son obligatorios')
    }
  }

}
