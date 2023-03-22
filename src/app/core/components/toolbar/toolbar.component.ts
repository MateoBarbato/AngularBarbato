import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/auth/state/auth.reducer';
import { selectAuthState, selectSesionActiva, selectSesionAll } from 'src/app/auth/state/auth.selectors';
import { Sesion } from 'src/app/models/sesion';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  title = 'AngularBarbato';
  sesion$!:Observable<Boolean>
  constructor(
    private router: Router,
    private authStore: Store<AuthState>
  ){}

  ngOnInit(): void {
    this.sesion$ = this.authStore.select(selectSesionActiva)
    if(this.sesion$){
      this.sesion$.subscribe(console.log)
    }
  }

  logOut(){
    let sesionLogout: Sesion = {
      sesionActiva:false,
      usuarioActivo:undefined
    }
      // falta hacer el llamado a la sesion.logout(sesionLogout)
    this.router.navigate(['auth/login'])
  }

  redirigirInicio(){
    this.router.navigate([''])

  }

  redirigirCursos(){
    this.router.navigate(['cursos'])
  }

  redirigirAlumnos(){
    this.router.navigate(['alumnos'])
  }
}
