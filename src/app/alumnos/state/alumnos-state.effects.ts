import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as AlumnosStateActions from './alumnos-state.actions';
import { AlumnosService } from '../services/alumnos.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Alumno } from 'src/app/models/alumno';
import { alumnosCargados } from './alumnos-state.actions';

@Injectable()
export class AlumnosStateEffects {

  cargarAlumnos$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(AlumnosStateActions.cargarAlumnoState),
      concatMap(()=>{
        return this.alumnos.obtenerAlumnosObservable().pipe(
          map((a:Alumno[]) => alumnosCargados({alumnos:a}))
        )
      })
    )
  })

  agregarAlumno$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(AlumnosStateActions.agregarAlumnoState),
      concatMap(({alumno}) => {
        return this.alumnos.agregarAlumno(alumno).pipe(
          map((a:Alumno)=>{
            this.snackBar.open(`${alumno.nombre} agregado satisfactoriamente`)
            this.router.navigate(['alumnos/listar'])
            return AlumnosStateActions.cargarAlumnoState();
          })
        )
      })
    )
  })

  editarAlumno$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(AlumnosStateActions.editarAlumnoState),
      concatMap(({alumno})=>{
        return this.alumnos.editarAlumno(alumno).pipe(
          map((a:Alumno)=>{
            this.snackBar.open(`El alumno: ${alumno.nombre} fue editado satisfactoriamente`)
            return AlumnosStateActions.cargarAlumnoState();
          })
        )
      })
    )
  })

  eliminarAlumno$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(AlumnosStateActions.eliminarAlumnoState),
      concatMap(({alumno})=>{
        return this.alumnos.eliminarAlumno(alumno).pipe(
          map((a:Alumno)=>{
            return AlumnosStateActions.cargarAlumnoState();
          })
        )
      })
    )
  })

  constructor(
    private actions$: Actions,
    private alumnos:AlumnosService,
    private router:Router,
    private snackBar:MatSnackBar
    ) {}
}
