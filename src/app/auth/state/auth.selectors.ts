import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.AuthState>(
  fromAuth.authFeatureKey
);


export const selectSesionActiva = createSelector(
  selectAuthState,
  (state)=> state.sesion.sesionActiva
)

export const selectUsuarioActivo = createSelector(
  selectAuthState,
  (state)=>state.sesion.usuarioActivo
)

export const selectUsuarioAdmin = createSelector(
  selectAuthState,
  (state)=>state.sesion.usuarioActivo?.esAdmin
)

export const selectSesionAll = createSelector(
  selectAuthState,
  (state)=>state.sesion
)
