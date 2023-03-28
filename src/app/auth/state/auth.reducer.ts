import { createFeature, createReducer, on } from '@ngrx/store';
import { Sesion } from 'src/app/models/sesion';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  sesion: Sesion
}

export const initialState: AuthState = {
  sesion:{
    sesionActiva:false,
    usuarioActivo:undefined
  }
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.cargarSesion, (state,{sesion}) =>{
    return {...state, sesion:{
      sesionActiva:true,
      usuarioActivo:sesion.usuarioActivo
    }}
  }))

export const authFeature = createFeature({
  name: authFeatureKey,
  reducer,
});

