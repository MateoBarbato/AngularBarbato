import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCursoState from './curso-state.reducer';

export const selectCursoState = createFeatureSelector<fromCursoState.CursoState>(
  fromCursoState.cursoStateFeatureKey
);

export const selectorCargandoCursos = createSelector(
  selectCursoState,
  (state:fromCursoState.CursoState) => state.cargando
)

export const selectorCursosCargados = createSelector(
  selectCursoState,
  (state:fromCursoState.CursoState) => state.cursos
)
