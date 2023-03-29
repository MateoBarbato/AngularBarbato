import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AlumnosService } from 'src/app/alumnos/services/alumnos.service';
import { sesionLogOut } from 'src/app/auth/state/auth.actions';
import { AuthState } from 'src/app/auth/state/auth.reducer';
import { selectUsuarioActivo, selectUsuarioAdmin } from 'src/app/auth/state/auth.selectors';
import { CursosService } from 'src/app/cursos/services/cursos.service';
import { Usuario } from 'src/app/models/usuario';



@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent implements OnInit {

  usuarioAdmin$!:Observable<boolean | undefined>
  usuarioActivo$!:Observable<Usuario | undefined>
  constructor
  (
    private authStore:Store<AuthState>,
    private router:Router,
  )
  {}

  ngOnInit(): void {
    this.usuarioAdmin$ = this.authStore.select(selectUsuarioAdmin)
    this.usuarioActivo$ = this.authStore.select(selectUsuarioActivo)
  }



  logOut(){
    this.authStore.dispatch(sesionLogOut())
    this.router.navigate(['auth/login'])
  }

}
