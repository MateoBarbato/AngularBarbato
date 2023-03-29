import { state } from '@angular/animations';
import { createFeature, createReducer, on } from '@ngrx/store';
import { Alumno } from '../../models/alumno';
import * as AlumnosStateActions from './alumnos-state.actions';

export const alumnosStateFeatureKey = 'alumnosState';

export interface AlumnoState {
  cargando:boolean,
  alumnos:Alumno[]
}

export const initialState: AlumnoState = {
  cargando:false,
  alumnos:[]
};

export const reducer = createReducer(
  initialState,
  on(AlumnosStateActions.cargarAlumnoState, state => {
    return { ...state, cargando:true}
  }),
  on(AlumnosStateActions.alumnosCargados, (state,{alumnos}) => {
    return{...state, cargando:false,alumnos:alumnos}
  }),
  on(AlumnosStateActions.agregarAlumnoState, (state) => {
    return state;
  }),
  on(AlumnosStateActions.editarAlumnoState, (state) => {
    return state;
  }),
  on(AlumnosStateActions.eliminarAlumnoState, (state) => {
    return state;
  }),
);

export const alumnosStateFeature = createFeature({
  name: alumnosStateFeatureKey,
  reducer,
});

