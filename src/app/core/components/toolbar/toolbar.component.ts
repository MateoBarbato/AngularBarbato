import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { sesionLogOut } from 'src/app/auth/state/auth.actions';
import { AuthState } from 'src/app/auth/state/auth.reducer';
import { selectSesionActiva, selectUsuarioActivo } from 'src/app/auth/state/auth.selectors';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  title = 'AngularBarbato';
  sesionActiva$!:Observable<boolean>
  usuarioActivo$!:Observable<Usuario | undefined>
  constructor(
    private router: Router,
    private authStore: Store<AuthState>
  ){}

  ngOnInit(): void {
    this.sesionActiva$ = this.authStore.select(selectSesionActiva)

    this.sesionActiva$.subscribe((data)=>{
      console.log(data)
    })
  }

  logOut(){
    this.authStore.dispatch(sesionLogOut())
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
