import { createAction, props } from '@ngrx/store';
import { Curso } from '../../models/curso';

export const cargarCursoState = createAction(
  '[CursoState] Cargar CursoStates'
);

export const cursosCargados = createAction(
  '[CursoState] Cursos Cargados',
  props<{cursos:Curso[]}>()
)

export const agregarCursoState = createAction(
  '[CursoState] Cursos Agregados',
  props<{curso:Curso}>()
)

export const editarCurso = createAction(
  '[CursoState] Cursos Editado',
  props<{curso:Curso}>()
);

export const eliminarCurso = createAction(
  '[CursoState] Cursos Eliminado',
  props<{curso:Curso}>()
);


