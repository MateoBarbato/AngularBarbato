import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AuthState } from 'src/app/auth/state/auth.reducer';
import { selectSesionActiva, selectSesionAll } from 'src/app/auth/state/auth.selectors';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../services/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authStore:Store<AuthState>,
    private router : Router
  ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authStore.select(selectSesionAll).pipe(map((sesion:Sesion)=>{
          if(sesion.usuarioActivo?.esAdmin){
            return true
          }else{
            alert('No tiene los persimos requeridos.')
            this.router.navigate(['inicio'])
            return false
          }
        })
      )
  }

}
