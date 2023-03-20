import { createAction, props } from '@ngrx/store';
import { Alumno } from '../models/alumno';

export const cargarAlumnoState = createAction(
  '[AlumnosState] Cargando AlumnoState'
);

export const alumnosCargados = createAction(
  '[AlumnosState] Alumnos cargados',
    props<{alumnos:Alumno[]}>()
)


