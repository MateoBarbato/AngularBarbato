import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from '../../services/login.service';
import { cargarSesion } from '../../state/auth.actions';
import { AuthState } from '../../state/auth.reducer';

@Component({
  selector: 'app-auth-inicio',
  templateUrl: './auth-inicio.component.html',
  styleUrls: ['./auth-inicio.component.css']
})
export class AuthInicioComponent implements OnDestroy,OnInit{
  show:boolean = false
  formulario!:FormGroup
  subscription!:Subscription

  constructor(
    private login : LoginService,
    private router: Router,
    private authStore : Store<AuthState>,
  ){

  }


submit(){
  let usuario : Usuario = {
    usuario: this.formulario.value.usuario,
    contrasena : this.formulario.value.contrasena,
    esAdmin : this.formulario.value.esAdmin
  }
  this.subscription = this.login.login(usuario).subscribe((sesion:Sesion)=>{
    this.authStore.dispatch(cargarSesion({sesion:sesion}))
    this.router.navigate(['inicio'])
  })

  // this.show = true PARA MOSTRAR MENSAJE DE LOGRO, DESPUES ARMAR UN SETTIMEOUT Y RE-DIRIJIR AL INICIO
}



ngOnInit(): void {
  this.formulario= new FormGroup({
    usuario: new FormControl(),
    contrasena: new FormControl(),
    esAdmin: new FormControl(false)
  })
}

ngOnDestroy(): void {
  if(this.subscription){
    this.subscription.unsubscribe()
  }
}

}
