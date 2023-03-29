import { createAction, props } from '@ngrx/store';
import { Alumno } from '../../models/alumno';

export const cargarAlumnoState = createAction(
  '[AlumnosState] Cargando AlumnoState'
);

export const alumnosCargados = createAction(
  '[AlumnosState] Alumnos cargados',
    props<{alumnos:Alumno[]}>()
)

export const agregarAlumnoState = createAction(
  '[AlumnosState] Alumno agregado',
    props<{alumno:Alumno}>()
)
export const editarAlumnoState = createAction(
  '[AlumnosState] Alumno editado',
    props<{alumno:Alumno}>()
)
export const eliminarAlumnoState = createAction(
  '[AlumnosState] Alumno eliminado',
    props<{alumno:Alumno}>()
)


